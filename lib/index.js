// 核心入口
const program = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

const { init } = require('./init');

// 命令行指令集合
const commandList = {
  init: {
    alias: 'i',
    description: 'create a new app',
    option: ['-f, --force', 'overwrite target directory if it exist'],
    examples: ['waj init <app-name>'],
    handler: init
  },
  '*': {
    alias: '',
    description: 'command not found',
    option: ['-not found'],
    examples: [''],
    handler: () => {
      console.log(chalk.red('command not found'));
    }
  }
};

// 创建命令
Object.keys(commandList).forEach(key => {
  const { alias, description, option = [], handler } = commandList[key];
  program
    .command(key)
    .alias(alias)
    .description(description)
    .option(...option)
    .action(() => {
      const params = process.argv.slice(3);
      handler(params);
    });
});

// 监听 --help 指令  打印logo和示例
program.on('--help', () => {
  console.log('\r\nExamples:');
  Object.keys(commandList).forEach(key => {
    key !== '*' &&
      commandList[key].examples.forEach(example => {
        console.log(`  ${example}`);
      });
  });

  // 使用 figlet 绘制 Logo
  console.log(
    `\r\n${figlet.textSync('waj-cli', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 100,
      whitespaceBreak: true
    })}`
  );

  console.log(
    `\r\nRun ${chalk.cyan(
      'waj <command> --help'
    )} for detailed usage of given command\r\n`
  );
});

program.version(require('../package.json').version);

// 解析命令行传递过来的参数
program.parse(process.argv);
