const fs = require('fs');
const path = require('path');

// Henter vault-path
const vaultPath = app.vault.adapter.basePath;

// Funktion: Fjerner redeploy trigger fra fil
function removeRedeployTrigger(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Hvis trigger findes, fjern den
    if (content.includes('<!-- redeploy trigger -->')) {
        content = content.replace(/\n*<!-- redeploy trigger -->\n*/g, '\n');
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
            removeRedeployTrigger(fullPath);
        }
    }
}

module.exports = async (params) => {
    new Notice("Fjerner redeploy trigger fra alle noter…");
    walk(vaultPath);
    new Notice("Færdig! 🚀 Alle triggers er fjernet.");
};
