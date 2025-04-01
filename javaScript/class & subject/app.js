const employee = {
    calcTax() {
        console.log("tax rate is 10%");
        
    }
}

const karanArjun = {
    salary : 5000;
    calcTax() {
        console.log("tax rate is 20%");
    }
}

karanArjun.__proto__ = employee;