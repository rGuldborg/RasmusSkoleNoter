const fs = require('fs');
const path = require('path');

// Henter vault-path
const vaultPath = app.vault.adapter.basePath;

// Funktion: Tilføjer redeploy trigger til fil
function addRedeployTrigger(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Hvis trigger ikke findes, tilføj den til slutningen af filen
    if (!content.includes('<!-- redeploy trigger -->')) {
        content = content.trimEnd() + '\n\n<!-- redeploy trigger -->\n';
        fs.writeFileSync(filePath, content, 'utf-8');
    }
}

// Gennemgå alle markdown-filer i vaulten
function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.md')) {
            addRedeployTrigger(fullPath);
        }
    }
}

module.exports = async (params) => {
    new Notice("Tilføjer redeploy trigger til alle noter…");
    walk(vaultPath);
    new Notice("Færdig! 🚀 Alle noter har nu triggers.");
};
