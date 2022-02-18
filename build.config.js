const esbuild = require('esbuild')
const fs = require('fs')


const builder = async () => {
  const files = fs.readdirSync('./js/')
  for (const file of files) {
    if (file.endsWith('.js')) {
      esbuild.build({
        entryPoints: [`./js/${file}`],
        outfile: `./js/dist/${file}`,
        legalComments: 'none',
        minify: true,
        bundle: true,
        platform: 'browser',
        sourcemap: true,
        define: {
          'process.env.NODE_ENV': '"production"'
        }
      })
        .catch((error) => {
          console.log(error)
          process.exit(1)
        })
        .then((d) => {
          console.log(`Done - ${file}`)
        })
    }
  }
}

const checker = async () => {
  console.log('Checking for updates...')
  const source = fs.readdirSync('./js/dist/')
  const target = fs.readdirSync('./js/')
  const diff = source.filter((file) => !target.includes(file) && file.endsWith('.js'))
  if (diff.length > 0) {
    for (const file of diff) {
      fs.unlinkSync(`./js/dist/${file}`)
      fs.unlinkSync(`./js/dist/${file}.map`)
      console.log(`Deleted ${file}`)
    }
  }
}

(async () => {
  await checker()
  await builder()
})()