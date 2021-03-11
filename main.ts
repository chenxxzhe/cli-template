import { Command } from 'commander'
import glob from 'glob'

const program = new Command()
program.version('0.1.0')
  // global option
  .option('--config <config-path>', 'config file path')
  .on('option:config', function (this: Command) {
    console.log('config', this.opts().config)
  })

// install all commands
glob.sync('src/commands/*.ts').forEach(filePath => {
  const install = require(filePath).default
  install(program)
})

async function main() {
  await program.parseAsync(process.argv)
}


main()


