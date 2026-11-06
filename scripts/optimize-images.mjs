// Converte imagens brutas (jpeg/png) em WebP otimizado.
// Uso: node scripts/optimize-images.mjs <pasta> [larguraMax=1600] [qualidade=82]
// Gera <nome>.webp ao lado de cada raw-*.{jpeg,jpg,png} e mantém o original (apague depois de conferir).
import { readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const [dir, maxW = "1600", quality = "82"] = process.argv.slice(2);
if (!dir) {
  console.error("Informe a pasta: node scripts/optimize-images.mjs <pasta>");
  process.exit(1);
}

const files = (await readdir(dir)).filter((f) => /^raw-.*\.(jpe?g|png)$/i.test(f));
for (const f of files) {
  const { name } = parse(f);
  const out = join(dir, `${name.replace(/^raw-/, "")}.webp`);
  const info = await sharp(join(dir, f))
    .resize({ width: Number(maxW), withoutEnlargement: true })
    .webp({ quality: Number(quality) })
    .toFile(out);
  console.log(`${f} -> ${parse(out).base} (${Math.round(info.size / 1024)} KB, ${info.width}x${info.height})`);
}
