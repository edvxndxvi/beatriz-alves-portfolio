// Gera as imagens de pré-visualização (Open Graph) de cada case: 1200×630 em JPG.
//
//   public/images/home/pastas/<slug>.webp  ->  public/images/og/<slug>.jpg
//
// Usa a mesma imagem da pasta na home. JPG porque alguns apps (LinkedIn, por exemplo) não leem WebP.
// Imagens 16:9 são cortadas (cover) para 1,91:1; as de outra proporção (quadradas ou mais largas)
// ficam inteiras, centralizadas sobre o creme do site, para não perder texto.
//
// Uso: node scripts/build-og.mjs
import { mkdir, readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC = join(process.cwd(), "public", "images", "home", "pastas");
const OUT = join(process.cwd(), "public", "images", "og");
const W = 1200;
const H = 630;

await mkdir(OUT, { recursive: true });

let count = 0;
for (const file of (await readdir(SRC)).filter((f) => f.endsWith(".webp"))) {
  const { name } = parse(file);
  const input = join(SRC, file);
  const { width, height } = await sharp(input).metadata();
  const ratio = width / height;
  const close = ratio > 1.7 && ratio < 2.0;

  // Fundo creme do site atrás de transparências e das faixas da imagem inteira.
  const base = sharp(input).flatten({ background: "#fffff0" });
  const img = close
    ? base.resize(W, H, { fit: "cover", position: "centre" })
    : base.resize(W, H, { fit: "contain", background: "#fffff0" });
  await img
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(join(OUT, `${name}.jpg`));
  count++;
}
console.log(`${count} imagens Open Graph geradas em public/images/og`);
