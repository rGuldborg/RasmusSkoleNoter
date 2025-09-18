const fs = require('fs');
const path = require('path');

// Sæt vaultPath til din vault
const vaultPath = "/home/rguld/Skrivebord/Systemudvikling"; // korrekt sti

function addDgPublish(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.md');
    const relativePath = path.relative(vaultPath, filePath).replace(/\\/g, '/');

    let frontmatter = {};
    let hasFrontmatter = false;

    if (content.startsWith('---')) {
        const endIndex = content.indexOf('---', 3);
        if (endIndex !== -1) {
            const yamlBlock = content.slice(3, endIndex).trim();
            yamlBlock.split('\n').forEach(line => {
                const [key, ...rest] = line.split(':');
                if (key && rest) frontmatter[key.trim()] = rest.join(':').trim();
            });
            content = content.slice(endIndex + 3).trimStart();
            hasFrontmatter = true;
        }
    }

    frontmatter['dg-publish'] = 'true';
    if (!frontmatter['title']) frontmatter['title'] = fileName;
// Opdater altid permalink
    frontmatter['permalink'] = `/${relativePath}`;


    const yamlLines = ['---'];
    for (const key in frontmatter) {
        yamlLines.push(`${key}: ${frontmatter[key]}`);
    }
    yamlLines.push('---\n');

    fs.writeFileSync(filePath, yamlLines.join('\n') + content, 'utf-8');
    console.log(`Opdateret: ${relativePath}`);
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.md')) {
            addDgPublish(fullPath);
        }
    }
}

console.log("Starter opdatering…");
walk(vaultPath);
console.log("Færdig! 🚀");
