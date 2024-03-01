#!usr/bin/emv-node

import inquirer from "inquirer";

import  chalk from 'chalk'
import chalkAnimation from  "chalk-animation";
import{log} from "console";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res ,2000) 
            
        })
    }
    async function welcom (){
        let rainbowtitle=chalkAnimation.rainbow('let start calculation');
        await sleep();
        rainbowtitle.stop();
        console.log (`
            _____________________
            |  _________________  |
            | | JO           0. | |
            | |_________________| |
            |  ___ ___ ___   ___  |
            | | 7 | 8 | 9 | | + | |
            | |___|___|___| |___| |
            | | 4 | 5 | 6 | | - | |
            | |___|___|___| |___| |
            | | 1 | 2 | 3 | | x | |
            | |___|___|___| |___| |
            | | . | 0 | = | | / | |
            | |___|___|___| |___| |
            |_____________________|
        `);
    
     }
    welcom();
    
    async function askQuestion(){
        const ans =await inquirer
        .prompt([
            /*pass your questions in here*/
            {
                type:"list",
                name:"operator",
                message:"wich operator you want to performance?/n",
                choices:["addition","subtraction","multiplication","division"]
            },
            {
                type:"number",
                name:"num1",
                message:"enter number 1:"
            },
            {
                type:"number",
                name:"num2",
                message:"enter number 2"
            }
        ]);
        if
        (ans.operation=="addition"){
            console.log(`chalk.green${ans.num1}+${ans.num2}=${ans.num1+ans.num2}`);
    
        }
        else if
        (ans.operation=="subtraction"){
            console. log(`chalk.red${ans.num1}-${ans.num2}=${ans.num1-ans.num2}`);
        }
        else if
        (ans.operation=="multipliction"){
            console.log(`chalk.blue${ans.num1}*${ans.num2}=${ans.num1*ans.num2}`);
        }
        else if
        (ans.operator=="division"){
            console.log(`chalk.yellow${ans.num1}/${ans.num2}=${ans.num1/ans.num2}`);
        }
    };
    //askquestion();
    async function startagain(){
        do{
            await askQuestion();
            var again=await inquirer
            .prompt({
                type:"input",
                name:"restart",
                message:"do you want to continue? press y or r:"
            })
    }while(again.restart=='y'||again.restart=='y'||again.restart=='yes'||again.restart=='YES')
    }
    
    function then (
        argo:(Answers: any) =>void){
            throw new Error("function not implemented.");
        }
        startagain();
    
    
