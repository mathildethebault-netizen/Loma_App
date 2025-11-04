// scripts/clean-hmr.js
import fs from "fs";
import path from "path";

const dist = path.resolve("dist/assets");

if (!fs.existsSync(dist)) {
  console.warn("⚠️ Aucun dossier 'dist/assets' trouvé. Build non encore effectué.");
  process.exit(0);
}

const files = fs.readdirSync(dist).filter(f => f.endsWith(".js"));

for (const file of files) {
  const filePath = path.join(dist, file);
  let content = fs.readFileSync(filePath, "utf-8");

  content = content
    .replace(/__DEFINES__/g, "{}")
    .replace(/__HMR_CONFIG_NAME__/g, "{}");

  fs.writeFileSync(filePath, content);
  console.log(`✅ Nettoyé : ${file}`);
}

console.log("✨ Nettoyage des variables HMR terminé !");