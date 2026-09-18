// Robi przezroczyste logo.png z logo-original.png (awatar kanału: białe logo na czerni -> alfa).
// Uruchom z folderu projektu: node tools/make-logo.mjs [podglad.png]   (wymaga: npm install --no-save sharp)
import sharp from 'sharp';

const img = sharp('logo-original.png').ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height;
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const i = (y * W + x) * 4;
  const lum = Math.max(data[i], data[i + 1], data[i + 2]);
  const a = lum < 14 ? 0 : Math.round(255 * Math.pow(lum / 255, 0.8));
  data[i] = 255; data[i + 1] = 255; data[i + 2] = 255; data[i + 3] = a;
}
const out = await sharp(data, { raw: { width: W, height: H, channels: 4 } }).trim({ threshold: 10 }).png({ compressionLevel: 9 }).toFile('logo.png');
console.log('logo.png', out.width, 'x', out.height, out.size, 'B');
if (process.argv[2]) {
  await sharp({ create: { width: out.width, height: out.height, channels: 4, background: '#1a0508' } })
    .composite([{ input: 'logo.png' }]).png().toFile(process.argv[2]);
}
