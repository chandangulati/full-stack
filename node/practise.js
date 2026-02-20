const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let employees = [];

function menu() {
    console.log('\n1. add employee');
    console.log('2. list employees');

    rl.question('select an option = ', function (choice) {
        if (choice == 1) {
            addemployee();
        } else if (choice == 2) {
            listemployees();
        } else {
            console.log('invalid option');
            menu();
        }
    });
}

function addemployee() {
    rl.question('name = ', function (name) {
        rl.question('age = ', function (age) {
            rl.question('position = ', function (position) {
                let employee = {
                    name: name,
                    age: age,
                    position: position
                };  

                employees.push(employee);
                console.log('employee added successfully');
                menu();
            });
        });
    });
}

function listemployees() {
    console.log('\nemployees list:');

    if (employees.length === 0) {
        console.log('no employees yet');
    } else {
        employees.forEach(employee => console.log(employee));
    }

    menu();
}

menu();
