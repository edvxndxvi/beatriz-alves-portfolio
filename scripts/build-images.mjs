// Gera as imagens do site a partir dos originais exportados do Figma.
//
//   assets-raw/figma/cases/<slug>[/<secao>]/*.{jpg,jpeg,png,svg}  ->  public/images/cases/...   (raster -> WebP, SVG copiado)
//   assets-raw/figma/home/*                                         ->  public/images/home/...
//   assets-raw/figma/seta-esquerda.svg                              ->  public/images/ui/seta-esquerda.svg
//
// Também escreve src/data/images.generated.json com src/largura/altura de cada arquivo (ordenado pelo nome).
//
// Uso: node scripts/build-images.mjs [--force]
import { mkdir, readdir, stat, copyFile, writeFile } from "node:fs/promises";
import { join, parse, relative, sep } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const RAW = join(ROOT, "assets-raw", "figma");
const OUT = join(ROOT, "public", "images");
const MANIFEST = join(ROOT, "src", "data", "images.generated.json");
const FORCE = process.argv.includes("--force");

const MAX_WIDTH = 2400; // layout de 1920px, em 2x para telas retina nas colunas mais estreitas
const QUALITY = { jpg: 80, png: 88 };

const naturalSort = (a, b) => a.localeCompare(b, "pt-BR", { numeric: true });

async function walk(dir) {
  const out = [];
  for (const entry of (await readdir(dir, { withFileTypes: true })).sort((a, b) => naturalSort(a.name, b.name))) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function isFresh(src, dest) {
  if (FORCE) return false;
  try {
    return (await stat(dest)).mtimeMs >= (await stat(src)).mtimeMs;
  } catch {
    return false;
  }
}

/** Converte (ou copia) um arquivo e devolve { src, width, height, kind } */
async function processFile(file, destDirAbs, publicPrefix) {
  const { name, ext } = parse(file);
  const e = ext.toLowerCase().slice(1);
  await mkdir(destDirAbs, { recursive: true });

  if (e === "svg") {
    const dest = join(destDirAbs, `${name}.svg`);
    if (!(await isFresh(file, dest))) await copyFile(file, dest);
    const m = await sharp(dest).metadata();
    return { name, src: `${publicPrefix}/${name}.svg`, width: m.width, height: m.height, kind: "svg" };
  }

  if (!["jpg", "jpeg", "png"].includes(e)) return null;
  const dest = join(destDirAbs, `${name}.webp`);
  const quality = e === "png" ? QUALITY.png : QUALITY.jpg;
  if (!(await isFresh(file, dest))) {
    await sharp(file, { limitInputPixels: false })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality, alphaQuality: 100, effort: 5 })
      .toFile(dest);
  }
  const m = await sharp(dest).metadata();
  return { name, src: `${publicPrefix}/${name}.webp`, width: m.width, height: m.height, kind: "raster" };
}

const manifest = { cases: {}, home: {} };
let count = 0;

// ---- cases ----
const casesRaw = join(RAW, "cases");
for (const file of await walk(casesRaw)) {
  const rel = relative(casesRaw, file).split(sep); // [slug, (secao,) arquivo]
  const group = rel.slice(0, -1).join("/"); // "dash" ou "corridas/dog-race"
  if (!group) continue;
  const item = await processFile(file, join(OUT, "cases", ...rel.slice(0, -1)), `/images/cases/${group}`);
  if (!item) continue;
  (manifest.cases[group] ??= []).push(item);
  count++;
}

// ---- home ----
const homeRaw = join(RAW, "home");
for (const file of await walk(homeRaw)) {
  const item = await processFile(file, join(OUT, "home"), "/images/home");
  if (!item) continue;
  manifest.home[item.name] = item;
  count++;
}

// ---- ui ----
try {
  const item = await processFile(join(RAW, "seta-esquerda.svg"), join(OUT, "ui"), "/images/ui");
  if (item) {
    manifest.home[item.name] = item;
    count++;
  }
} catch {
  /* opcional */
}

for (const g of Object.keys(manifest.cases)) manifest.cases[g].sort((a, b) => naturalSort(a.name, b.name));
await mkdir(join(ROOT, "src", "data"), { recursive: true });
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`${count} arquivos processados em ${Object.keys(manifest.cases).length} grupos de cases.`);
