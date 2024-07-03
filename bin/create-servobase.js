#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const templateDir = path.join(new URL('.', import.meta.url).pathname, '../template');
const jstemplateDir = path.join(new URL('.', import.meta.url).pathname, '../jstemplate');
const gqlts = path.join(new URL('.', import.meta.url).pathname, '../gqlts');
const gqljs = path.join(new URL('.', import.meta.url).pathname, '../gqljs');
const gqlsockts = path.join(new URL('.', import.meta.url).pathname, '../gqlsockts');
const gqlsockjs = path.join(new URL('.', import.meta.url).pathname, '../gqlsockjs');
const js = path.join(new URL('.', import.meta.url).pathname, '../js');
const ts = path.join(new URL('.', import.meta.url).pathname, '../ts');
const modeljs = path.join(new URL('.', import.meta.url).pathname, '../modeljs');
const modelts = path.join(new URL('.', import.meta.url).pathname, '../modelts');
const sockjs = path.join(new URL('.', import.meta.url).pathname, '../js');
const sockts = path.join(new URL('.', import.meta.url).pathname, '../ts');

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
      choices: ["Javascript","Typescript"]
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
  .then( (answers) => {
    const targetDir = path.join(currentDir, answers.projectName);
    
    if (fs.existsSync(targetDir)) {
      console.log(chalk.red('Error: Directory already exists.'));
      process.exit(1);
    }

    const chosenLanguages = answers.choselanguage;
    const isgraphql = answers.chosegql;
    const issock = answers.chosesock;
    const isdb = answers.chosedb;

   



    if(chosenLanguages === "Javascript" && isgraphql === false && isdb === false && issock === false){
      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(js, targetDir);
      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === false && issock === false`)
     
    }

    else if(chosenLanguages === "Javascript" && isgraphql === false && isdb === false && issock === true){
      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(sockjs, targetDir);

      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === false){
      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(js, targetDir);
      fs.copySync(modeljs, targetDir);

      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === true){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(sockjs, targetDir);
      fs.copySync(modeljs, targetDir);

      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === true`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === false){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqljs, targetDir);

      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === false`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === true){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqlsockjs, targetDir);

      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === false){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqljs, targetDir);
      fs.copySync(modeljs, targetDir);

      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === true){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqlsockjs, targetDir);
      fs.copySync(modeljs, targetDir);
      
      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.blue(`Navigate to the project directory` ));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm install'));
      console.log(chalk.blue(`Run` ));
      console.log(chalk.green('npm run dev'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === true`)
     
    }
   




    ////////////////////////////////////////
    
    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === false){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === false`)
     
    }

    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === true){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === false){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === true){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === true`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === false){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === false`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === true){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === false){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === true){
      // fs.copySync(jstemplateDir, targetDir);
      // console.log(chalk.green('Project created successfully!'));
      // console.log(chalk.blue(`Navigate to the project directory` ));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm install'));
      // console.log(chalk.blue(`Run` ));
      // console.log(chalk.green('npm run dev'));

      console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === true`)
     
    }
   


    
   
    else{
      
      console.log("no option chosen");
    }

   
      
    
  });
