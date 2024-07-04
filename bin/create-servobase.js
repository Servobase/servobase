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
const sockjs = path.join(new URL('.', import.meta.url).pathname, '../sockjs');
const sockts = path.join(new URL('.', import.meta.url).pathname, '../sockts');

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

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === false && issock === false`)
     
    }

    

    else if(chosenLanguages === "Javascript" && isgraphql === false && isdb === false && issock === true){
      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(sockjs, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === false){
      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(js, targetDir);
      fs.copySync(modeljs, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === true){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(sockjs, targetDir);
      fs.copySync(modeljs, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === false && isdb === true && issock === true`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === false){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqljs, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === false`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === true){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqlsockjs, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === false){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqljs, targetDir);
      fs.copySync(modeljs, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === true){

      fs.copySync(jstemplateDir, targetDir);
      fs.copySync(gqlsockjs, targetDir);
      fs.copySync(modeljs, targetDir);
      

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Javascript" && isgraphql === true && isdb === true && issock === true`)
     
    }
   




    ////////////////////////////////////////
    
    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === false){

      fs.copySync(templateDir, targetDir);
      fs.copySync(ts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === false`)
     
    }

    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === true){

      fs.copySync(templateDir, targetDir);
      fs.copySync(sockts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === false){

      fs.copySync(templateDir, targetDir);
      fs.copySync(ts, targetDir);
      fs.copySync(modelts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));
      // console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === true){

      fs.copySync(templateDir, targetDir);
      fs.copySync(sockts, targetDir);
      fs.copySync(modelts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Typescript" && isgraphql === false && isdb === true && issock === true`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === false){

      fs.copySync(templateDir, targetDir);
      fs.copySync(gqlts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === false`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === true){

      fs.copySync(templateDir, targetDir);
      fs.copySync(gqlsockts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === false && issock === true`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === false){

      fs.copySync(templateDir, targetDir);
      fs.copySync(gqlts, targetDir);
      fs.copySync(modelts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === false`)
     
    }
    else if(chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === true){

      fs.copySync(templateDir, targetDir);
      fs.copySync(gqlsockts, targetDir);
      fs.copySync(modelts, targetDir);

      console.log(chalk.green('________________________________________'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.green.bold('Project created successfully!'));
      console.log(chalk.yellowBright(`` ));
      console.log(chalk.yellowBright(`Navigate to the project directory` ));
      console.log(chalk.yellowBright(`cd ${answers.projectName}` ));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm install'));
      console.log(chalk.cyanBright.bold(`Run` ));
      console.log(chalk.greenBright('npm run dev'));
      console.log(chalk.gray('Happy Coding !'));
      console.log(chalk.magentaBright('Servobase | Made with ❤️ by Vidit Tamrakar'));

      // console.log(`chosenLanguages === "Typescript" && isgraphql === true && isdb === true && issock === true`)
     
    }
   


    
   
    else{
      
      console.log("no option chosen");
    }

   
      
    
  });
