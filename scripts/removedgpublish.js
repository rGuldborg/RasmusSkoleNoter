const fs = require('fs');
const path = require('path');

// Sæt vaultPath til din vault
const vaultPath = "/home/rguld/Skrivebord/Systemudvikling"; // korrekt sti

function clearProperties(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Check om der er frontmatter
    if (content.startsWith('---')) {
        const endIndex = content.indexOf('---', 3);
        if (endIndex !== -1) {
            let yamlBlock = content.slice(3, endIndex).trim();
            let frontmatter = {};

            // Parse eksisterende frontmatter
            yamlBlock.split('\n').forEach(line => {
                const [key, ...rest] = line.split(':');
                if (key && rest) frontmatter[key.trim()] = rest.join(':').trim();
            });

            // Fjern de properties vi vil slette
            delete frontmatter['dg-publish'];
            delete frontmatter['permalink'];
            delete frontmatter['title'];

            // Genskab YAML kun hvis der er andre properties tilbage
            let yamlLines = [];
            if (Object.keys(frontmatter).length > 0) {
                yamlLines.push('---');
                for (const key in frontmatter) {
                    yamlLines.push(`${key}: ${frontmatter[key]}`);
                }
                yamlLines.push('---\n');
            }

            // Gem filen med opdateret frontmatter
            content = content.slice(endIndex + 3).trimStart();
            fs.writeFileSync(filePath, yamlLines.join('\n') + content, 'utf-8');
            console.log(`Renset properties i: ${filePath}`);
        }
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.md')) {
            clearProperties(fullPath);
        }
    }
}

console.log("Starter rensning af properties…");
walk(vaultPath);
console.log("Færdig! ✅");
