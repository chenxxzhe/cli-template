import chalk from 'chalk'
import commander from 'commander'


interface Params {
  upper: boolean
}

export default function install(program: commander.Command): void {
  program
    .command('hello [text...]', {isDefault: true})
    .description('say hello')
    .option('-u, --upper', 'upper case')
    .action(async (text: string[], opts: Params) => {
      await say(text.length ? text : ['world'], opts.upper)
    })
}

export async function say(text: string[], upper: boolean): Promise<void> {
  if (upper) text = text.map(i => i.toUpperCase())
  console.log(chalk.green('hello', ...text));
}

