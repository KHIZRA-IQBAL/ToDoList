#! /user/bin/env node

import inquirer from "inquirer";


let todos: string[] = [];

let whilecondition: boolean = true;
 
while (whilecondition === true) {
  let ans = await inquirer.prompt([
    {
      name: "Option",
      type: "list",
      message: "select an option",
      choices: ["add", "remove"],
    },
  ]);
  if (ans.Option === "add") {
    let ADD = await inquirer.prompt([
      {
        name: "Add",
        type: "input",
        message: "add something in your list ",
      },
    ]);
    if (ADD.Add !== " ") {
      todos.push(ADD.Add);
      console.log(todos);
    } else {
      console.log("plz write something if you want ");
    }
  }
 else  if (ans.Option==='remove') {
    let removes= await inquirer.prompt([{
        name:'delete',
        type:'list',
        message:'remove anything in your list ',
        choices:todos   
     }]);
     let index_to_remove=todos.indexOf(removes.delete);
     if (index_to_remove>=0) {
        todos.splice(index_to_remove,1);
     console.log('you removed :',removes.delete);
     console.log(todos);
     }
  }
  //...........confirmation..........//
  let user_ans=await inquirer.prompt({
    name:'confirm',
    type:'confirm',
    message:'do you want to continue?',
    default:true
  })
  if (user_ans.confirm===false) {
    whilecondition=false;
  }
}


