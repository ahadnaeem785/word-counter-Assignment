#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet.textSync("Word Counter")
console.log(figlet.textSync("Word Counter"));



while(true){
    let write=await inquirer.prompt([{
        name:"text",
        type:"string",
        message:chalk.cyan("Enter your text :")
    }])
    let result=write.text.replace(/\s+/g,'');
    console.log(chalk.green.bold(`The character count is: ${result.length}`));
    let words=write.text.trim().split(" ")  //split string after spaces 
    console.log(chalk.green.bold(`The word count is : ${words.length}`));
    let decision=await inquirer.prompt([{
        name:"option",
        type:"list",
        message:"Do you want to use again? ",
        choices:["Yes","NO"]
    }])
    if(decision.option=="Yes"){
    continue
    }else{
        console.log(chalk.blue.bold.italic("Thanks for use!"));
        
        break
    }

}

