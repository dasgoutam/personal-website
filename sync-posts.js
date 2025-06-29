const fs = require("fs");
const path = require("path");
require("dotenv").config();

const source = process.env.OBSIDIAN_POSTS_PATH;
const destination = path.resolve(__dirname, "posts");

if (!source) {
  console.error("OBSIDIAN_POSTS_PATH is not defined in .env");
  process.exit(1);
}

// Clean old destination folder
fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });

const files = fs.readdirSync(source);

files.forEach((file) => {
  const sourcePath = path.join(source, file);

  if (fs.statSync(sourcePath).isFile()) {
    const ext = path.extname(file);
    const name = path.basename(file, ext);

    // Replace spaces with dashes and make it lowercase
    const safeName = name.replace(/\s+/g, "-").toLowerCase() + ext;

    const destPath = path.join(destination, safeName);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied: ${file} → ${safeName}`);
  }
});

console.log("All posts synced and renamed.");