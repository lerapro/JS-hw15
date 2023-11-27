// --------------------------Task1------------------------
let user = {
    hobby: "cycling",
    premium: true
}

const { hobby, premium, ...rest } = user;

user = {
  ...rest,
  mood: 'happy',
  hobby: 'skydiving',
  premium: false
};


// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// --------------------------Task2------------------------

const object = {
    height: 150,
    weight: 150,
    border: true
}

const { ...rest1 } = object;

const countProps = (obj) => {
    return Object.keys(obj).length;
}

// console.log(countProps(rest1));

// --------------------------Task3------------------------
const employees = {
    Mango: 5,
    Kiwi: 7,
    Poly: 4,
    Ajax: 3
}

const { ...rest2 } = employees;

const findBestEmployee = (employees) => {
    let result = 0;
    let resultName;
    for (const key in employees) {
        if (employees[key] > result) {
            result = employees[key];
            resultName = key;
        }
    }

    return resultName
}

// console.log(findBestEmployee(rest2));

// --------------------------Task4------------------------
const employeesSalary = {
    Mango: 150,
    Kiwi: 130,
    Poly: 200,
    Ajax: 190
}

const { ...rest3 } = employeesSalary;

const countTotalSalary = (employees) => {
    let sum = 0;

    for (const key in employees) {
        sum += employees[key];
    }

    return sum
}

// console.log(countTotalSalary(rest3));

// --------------------------Task5------------------------

// Використовую той самий масив об'єктів для 5 та 6 завдань

const products = [
    { name: "bread", price: 25, quantity: 2 },
    { name: "orange", price: 5, quantity: 5 },
    { name: "water", price: 35, quantity: 3 }
];

const getAllPropValues = (arr, prop) => {
    let values = [];
    for (let obj1 of arr) {
        const { [prop]: value } = obj1;
        values.push(value);
    }

    return values;
}

// console.log(getAllPropValues(products, "price"));

// --------------------------Task6------------------------

const calculateTotalPrice = (allProdcuts, productName) => {
    let totalPrice = 0;

    for (const { name, price, quantity } of allProdcuts) {

        if (productName == name) {
            totalPrice += price * quantity;
        }
    }

    return totalPrice

}
// console.log(calculateTotalPrice(products, "orange"));


// --------------------------Task7------------------------

let account = {
    balance: 100,
    transactions: [],

    put(amount) {
        this.balance += amount;
        this.transactions.push({ type: 'put', amount });
        console.log(`Your balance is ${this.balance}.`);
    },

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push({ type: 'withdrawal', amount });
            console.log(`Your balance is ${this.balance}.`);
        } else {
            console.log("Not enough money on your balance");
        }
    },

    getBalance() {
        console.log(`Your balance is ${this.balance}.`);
    },
    
    getTransactionHistory() {
        console.log(`Your transaction history:`);
        console.log(this.transactions);
    }
};


const { put, withdraw, getBalance, getTransactionHistory } = account;

// account.put(400);
// account.withdraw(200); 
// account.getBalance(); 
// account.getTransactionHistory(); 