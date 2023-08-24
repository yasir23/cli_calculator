#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);

    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("lets start calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(`
     ______________________
    |  __________________  |
    | | CALCULATOR     0.| | 
    | |__________________| |
    | ___ ___ ___     ___  |
    || 7 | 8 | 9 |   | + | |
    ||___|___|___|   |___| |
    || 4 | 5 | 6 |   | - | |
    ||___|___|___|   |___| |
    || 1 | 2 | 3 |   | * | |
    ||___|___|___|   |___| | 
    || . | 0 | = |   | / | |
    ||___|___|___|   |___| |
    |______________________|
    `)
    
}

await welcome();

async function askQuestions() {
    const answers = await inquirer
    .prompt([
        {
            type:"list",
            name:"operator",
            message: "which operation you want to perform?",
            choices:["Addition","subtraction","multiplication","division"]
        },
        {
            type:"number",
            name:"num1",
            message:"Enter number 1"
        },
        {
            type:"number",
            name:"num2",
            message:"Enter number 2"
        }
    ]);

    if(answers.operator == "Addition"){
        console.log(chalk.green(`${answers.num1}+${answers.num2} = ${answers.num1 + answers.num2}`));

    }
    else if(answers.operator == "subtraction"){
        console.log(chalk.green(`${answers.num1}-${answers.num2} = ${answers.num1 - answers.num2}`));

    }
    else if(answers.operator == "Multiplication"){
        console.log(chalk.green(`${answers.num1}*${answers.num2} = ${answers.num1 * answers.num2}`));

    }
    else if(answers.operator == "division"){
        console.log(chalk.green(`${answers.num1}/${answers.num2} = ${answers.num1 / answers.num2}`));

    }

};
    // askQuestions();

    async function startAgain() {

        do {
            await askQuestions();
            var again = await inquirer.prompt({
                type:"input",
                name:"restart",
                message:"Do you want to continue? press y or n:"
            })
        }
        while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES')
        
    }

    startAgain();