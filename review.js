//*** */Bài 1
function squareNum(num) {
    return num ** 2
}
console.log(squareNum(15))

//*** */Bài 2
function validate(stringText, wordText) {
    const stringArr = stringText.split(" "); // "" khác với " "
    // console.log(stringArr);
    if (stringArr.includes(wordText)) {
        return true
    }
    return false
}
console.log(validate('Hello World', 'World'))

//*** */Bài 3
function addNew(inputValue, newValue) {
    return inputValue.map(item => `${newValue}: ${item}`)
}
// function addNew(inputValue, newValue) {
//     const result = []
//     for (let i = 0; i < inputValue.length; i++) {
//         result.push(`${newValue}: ${inputValue[i]}`)
//     }
//     return result
// }
const input = ["one" , "two", "three"];
const newValue = "number";

console.log(addNew(input, newValue))

//*** */Bài 4
const nums = [1, 2, 3, 4];
function duplicate() {return nums.map((x) => x * 2)} 
// function duplicate() {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         result.push(nums[i] * 2)
//     }
//     return result
// }
console.log(duplicate());

//*** */Bài 5
const number = [1, 2, 3, 4, 5, 6]
function oddNumber() {return number.filter((x) => x % 2 != 0) }
// function oddNumber() {
//     const result = []
//     for (let i = 0; i < number.length; i++) {
//         if(number[i] % 2 != 0) {
//             result.push(number[i])
//         }
//     }
//     return result
// }
console.log(oddNumber());

//*** */Bài 6
const employees = [
    {id: 1, name: "John", workingDays: 22},
    {id: 2, name: "Jane", workingDays: 20},
    {id: 3, name: "Mark", workingDays: 25},
]
function totalWorkingDays() {
    let totalDays = 0;
    for (let i = 0; i < employees.length; i ++) {
        totalDays += employees[i].workingDays
    }
    return totalDays
}
// function totalWorkingDays() {
//     return employees.reduce((total, employee) => total + employee.workingDays, 0)
// }
console.log(totalWorkingDays());

//*** */Bài 7
const employees7 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
]
function highestSalary() {
    let max = employees7[0]
    for(let i = 0; i < employees7.length; i++) {
        if(employees7[i].salary > max.salary) {
            max = employees7[i]
        }
    }
    return max
}
console.log(highestSalary());

// const maxSalary = Math.max(...employees.map(employee => employee.salary));
// const highestPaidEmployee = employees.filter(employee => employee.salary === maxSalary)[0];
//console.log(highestPaidEmployee)

//*** */Bài 8
const employees8 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
]
function hardWorkingEmployee() {
    let highestInput = 0
    let workHardEmp = []
    for (let i = 0; i < employees8.length; i++) {
        const cong = employees8[i].workingDays - employees8[i].lateDays;
        if (cong > highestInput) {
            highestInput = cong;
            workHardEmp = employees8[i]
        }
    }
    return workHardEmp
}
console.log(hardWorkingEmployee());

//*** */Bài 9
const employees9 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
function sameName() {
    let samePerson = {}
    for (let i = 0; i < employees9.length; i++) {
        const element = employees9[i]
        if(!samePerson[element.name]) {
            samePerson[element.name] = []
        }
        samePerson[element.name].push(element)
    }
    return samePerson
}
console.log(sameName());
