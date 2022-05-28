const child_process = require('child_process');
const fs = require('fs');

child_process.execSync('npx vite build', { stdio: 'inherit' });

console.info('[vite] Build completed successfully');

fs.readdirSync('./').forEach(file => {
    // delete all files except dist and build
    if (file !== 'dist' && file !== 'build' && file !== 'node_modules' && file !== 'CNAME') {
        if(fs.lstatSync(file).isDirectory()) {
            fs.rmdirSync(file);
        } 
        fs.unlinkSync(file);
    }
})
// copy the contents of ./dist into the root including the folders and its content
fs.copyFileSync('./dist/src/index.html', './index.html');
fs.copyFileSync('./dist/src/404.html', './404.html');

fs.readdirSync('./dist/assets').forEach(file => {
    fs.copyFileSync('./dist/assets/' + file, './assets/' + file);
})

/*fs.readdirSync('./dist').forEach(file => {
        const content = fs.readFileSync(`./dist/${file}`, 'utf8');
        fs.writeFileSync(`./${file}`, content, 'utf-8');
    });*/

console.info('[build.js] Copied files to dist successfully');

// fs.rmSync('./dist/src', { recursive: true });

console.info('[build.js] Removed src successfully');