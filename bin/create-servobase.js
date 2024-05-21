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
      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));
      

    }
   

   
      
    
  });
