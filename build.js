const child_process = require('child_process');
const fs = require('fs');

child_process.execSync('npx vite build', { stdio: 'inherit' });

console.info('[vite] Build completed successfully');

fs.readdirSync('./dist/src').forEach(file => {
    if (file.endsWith('.html')) {
        const content = fs.readFileSync(`./dist/src/${file}`, 'utf8');
        fs.writeFileSync(`./dist/${file}`, content, 'utf-8');
    }
    });

console.info('[build.js] Copied files to dist successfully');

fs.rmSync('./dist/src', { recursive: true });

console.info('[build.js] Removed src successfully');