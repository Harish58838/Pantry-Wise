const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const indexFile = path.join(publicDir, 'index.html');
const outputFile = path.join(__dirname, 'assets', 'bundled.js'); // We'll export it as a JS string

console.log('Reading index.html...');
let html = fs.readFileSync(indexFile, 'utf8');

// Inline CSS
console.log('Inlining CSS...');
const cssRegex = /<link\s+rel="stylesheet"\s+href="([^"]+)">/g;
html = html.replace(cssRegex, (match, href) => {
    try {
        const cssPath = path.join(publicDir, href);
        const cssContent = fs.readFileSync(cssPath, 'utf8');
        console.log(`  Included: ${href}`);
        return `<style>\n${cssContent}\n</style>`;
    } catch (err) {
        console.warn(`  Failed to read: ${href}`);
        return match;
    }
});

// Inline JS
console.log('Inlining JS...');
const jsRegex = /<script\s+src="([^"]+)"><\/script>/g;
html = html.replace(jsRegex, (match, src) => {
    try {
        const jsPath = path.join(publicDir, src);
        const jsContent = fs.readFileSync(jsPath, 'utf8');
        console.log(`  Included: ${src}`);
        return `<script>\n${jsContent}\n</script>`;
    } catch (err) {
        console.warn(`  Failed to read: ${src}`);
        return match;
    }
});

// Write to a JS file that exports the giant string
console.log('Writing bundled assets...');
const jsExportContent = `export const BundledHTML = \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;\n`;
fs.writeFileSync(outputFile, jsExportContent, 'utf8');

console.log('Bundle complete! Created assets/bundled.js');
