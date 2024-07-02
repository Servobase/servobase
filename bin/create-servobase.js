#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const templateDir = path.join(new URL('.', import.meta.url).pathname, '../template');
const jstemplateDir = path.join(new URL('.', import.meta.url).pathname, '../jstemplate');
const currentDir = process.cwd();

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter project name:',
      default: 'my-backend-project',
    },

    {
      type: 'list',
      name: 'choselanguage',
      message: 'Select language - ',
      choices: ["Javascript"," Typescript"]
    },

    {
      type: 'confirm',
      name: 'chosedb',
      message:'Are you going to use MongoDB in the project?',
      default: false
    },

    {
      type: 'confirm',
      name: 'chosegql',
      message:'Do you want Graphql in the project?',
      default: false
    },

    {
      type: 'confirm',
      name: 'chosesock',
      message:'Do you want websockets in the project?',
      default: false
    },




  ])
  .then(answers => {
    const targetDir = path.join(currentDir, answers.projectName);
    
    if (fs.existsSync(targetDir)) {
      console.log(chalk.red('Error: Directory already exists.'));
      process.exit(1);
    }

    const chosenLanguages = answers.choselanguage;



    if(answers.choselanguage === "Javascript"){
      fs.copySync(jstemplateDir, targetDir);
      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));
     
    }
    else{
      fs.copySync(templateDir, targetDir);
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.cyanBright(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      
      
    }
   

   
      
    
  });
