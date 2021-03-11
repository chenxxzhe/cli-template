import {NodePlopAPI} from 'plop'

export default function (plop: NodePlopAPI) {
	plop.setGenerator('command', {
		description: 'create a command',
		prompts: [{
      type: 'input',
      name: 'name',
      message: 'input command name'
    }],
		actions: [{
      type: 'add',
      path: 'src/commands/{{name}}.ts',
      templateFile: 'plop-template/command.hbs',
    }]
	});
};