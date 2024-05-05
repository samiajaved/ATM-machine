import inquirer from "inquirer";
let balance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin."
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin answer");
}
else if (pinAnswer.pin != myPin) {
    console.log("incorect pin code. ATM helted.");
    process.exit(1);
}
;
let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "please select option",
        choices: ["withdraw", "check balance"]
    }
]);
if (operationAnswer.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter your amount"
        }
    ]);
    balance -= amountAns.amount;
    console.log("your remaining balance is:" + balance);
}
else if (operationAnswer.operation === "check balance") {
    console.log("your balance is: " + balance);
}
;
