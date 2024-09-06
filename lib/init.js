/**
 * 创建
 */
const Inquirer = require('inquirer');
const path = require('path');
const MetalSmith = require('metalsmith');
const { render } = require('consolidate').ejs;
const fs = require('fs');
const fsExtra = require('fs-extra');
const chalk = require('chalk');
const shell = require('shelljs');

async function init(args) {
  let [projectName, ...options] = args;
  // 没有输入项目名提示输入
  if (!projectName) {
    const { name } = await Inquirer.prompt([
      {
        name: 'name',
        type: 'input',
        message: 'Please enter the project name:',
        default: 'my-project'
      }
    ]);
    projectName = name;
  }

  // 不要创建
  let notCreated = false;

  const forces = ['-f', '--force'];
  // 判断目录是否已经存在
  if (fs.existsSync(path.resolve(projectName))) {
    // 说明需要强制创建
    if (forces.some(item => options.includes(item))) {
      fsExtra.removeSync(path.resolve(projectName));
    } else {
      const { force } = await Inquirer.prompt([
        {
          name: 'force',
          type: 'input',
          message:
            'The directory already exists. Whether to create it forcibly? (yes/no)'
        }
      ]);
      force !== 'yes' && force !== 'y' && (notCreated = true);
    }
  }

  if (notCreated) {
    return;
  }

  // 让用户选择模板
  const { repo } = await Inquirer.prompt([
    {
      name: 'repo',
      type: 'list',
      message: 'Please select template',
      choices: fs.readdirSync(path.resolve(__dirname, '../template'))
    }
  ]);

  try {
    await new Promise((resolve, reject) => {
      MetalSmith(__dirname)
        .source(`../template/${repo}`) // 文件来源
        .destination(path.resolve(projectName)) // 拷贝到哪里
        .use(files => {
          // 需要编译的文件类型
          const exts = ['.js', '.json', '.jsx', '.ejs', '.md', '.html'];
          Object.keys(files).forEach(async file => {
            // 如果文件是需要编译的类型
            if (exts.some(ext => file.includes(ext))) {
              // content默认是 Buffer
              let content = files[file].contents.toString();
              // 有需要编译的字段才编译
              if (/<%=(.)+%>/.test(content)) {
                // 编译 projectName
                content = await render(content, { projectName });
                files[file].contents = Buffer.from(content);
              }
            }
          });
        })
        .build(error => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
    });
    if (fs.existsSync(path.resolve(projectName, './gitignore.txt'))) {
      fs.renameSync(
        path.resolve(projectName, './gitignore.txt'),
        path.resolve(projectName, './.gitignore')
      );
    }
    // 初始化git
    if (shell.exec(`cd ${shell.pwd()}/${projectName} && git init`).code !== 0) {
      console.log(chalk.red('git initialization failed'));
      shell.exit(1);
    }
    // 让用户选择模板
    const { method } = await Inquirer.prompt([
      {
        name: 'method',
        type: 'list',
        message: 'Select install method',
        choices: ['npm', 'yarn', 'pnpm']
      }
    ]);
  
    if (
      shell.exec(`cd ${shell.pwd()}/${projectName} && ${method} install`)
        .code !== 0
    ) {
      console.log(
        `\r\n${chalk.yellow(
          'Automatic dependency installation failed, please install manually'
        )}\r\n`
      );
      shell.exit(1);
    }

    console.log(`\r\n${chalk.green('Success')}\r\n`);
    console.log(` ${chalk.cyan(`$  cd ${projectName}`)}`);
    console.log(` ${chalk.cyan('$  yarn dev')}`);
  } catch (error) {
    console.log(`\r\n${chalk.red('Error')}\r\n`);
    console.log(error);
    shell.exit(1);
  }
}

module.exports = {
  init
};
