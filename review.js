//*** */Bài 1
function squareNum(num) {
    return num ** 2
}
console.log("Bài 1:",squareNum(15))

//*** */Bài 2
function validate(stringText, wordText) {
    const stringArr = stringText.split(" "); // "" khác với " "
    // console.log(stringArr);
    if (stringArr.includes(wordText)) {
        return true
    }
    return false
}
console.log("Bài 2:",validate('Hello World', 'World'))

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

console.log("Bài 3:",addNew(input, newValue))

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
console.log("Bài 4:",duplicate());

//*** */Bài 5
const number = [1, 2, 3, 4, 5, 6]
<<<<<<< HEAD
function oddNumber() {return number.filter((x) => x % 2 != 0) }

=======
function oddNumber() {return number.filter((x) => x / 2 != 0) }
>>>>>>> origin/master
// function oddNumber() {
//     const result = []
//     for (let i = 0; i < number.length; i++) {
//         if(number[i] / 2 != 0) {
//             result.push(number[i])
//         }
//     }
//     return result
// }
console.log("Bài 5:",oddNumber());

//*** */Bài 6
const employees = [
    {id: 1, name: "John", workingDays: 22},
    {id: 2, name: "Jane", workingDays: 20},
    {id: 3, name: "Mark", workingDays: 25},
]
function totalWorkingDays() {
    return employees.reduce((total, employee) => total + employee.workingDays, 0)

    // let totalDays = 0;
    // for (let i = 0; i < employees.length; i ++) {
    //     totalDays += employees[i].workingDays
    // }
    // return totalDays
}
console.log("Bài 6:",totalWorkingDays());

//*** */Bài 7
const employees7 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
]
function highestSalary() {
    return employees7.reduce((max, employee) => {
        return (employee.salary > max.salary) ? employee : max
    })
    // let max = employees7[0]
    // for(let i = 0; i < employees7.length; i++) {
    //     if(employees7[i].salary > max.salary) {
    //         max = employees7[i]
    //     }
    // }
    // return max
}
console.log("Bài 7:",highestSalary());

//*** */Bài 8
const employees8 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
]
const hardWorkingEmployee = employees8.reduce((max, employee) => {
    const normalWorkHard = employee.workingDays - employee.lateDays;
    const maxWorkHard = max.workingDays - employee.lateDays;
    return normalWorkHard > maxWorkHard ? employee : max
}) 
console.log("Bài 8: ",hardWorkingEmployee);

// function hardWorkingEmployee() {
//     let highestInput = 0
//     let workHardEmp = []
//     for (let i = 0; i < employees8.length; i++) {
//         const cong = employees8[i].workingDays - employees8[i].lateDays;
//         if (cong > highestInput) {
//             highestInput = cong;
//             workHardEmp = employees8[i]
//         }
//     }
//     return workHardEmp
// }
// console.log("Bài 8:",hardWorkingEmployee());

//*** */Bài 9
const employees9 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
function sameName() {
    return employees9.reduce((acc, employee) => {
        const samePerson = employee.name
        if(!acc[samePerson]) {
            acc[samePerson] = []
        }
        acc[samePerson].push(employee)
        return acc
    }, {})
    // let samePerson = {}
    // for (let i = 0; i < employees9.length; i++) {
    //     const element = employees9[i]
    //     if(!samePerson[element.name]) {
    //         samePerson[element.name] = []
    //     }
    //     samePerson[element.name].push(element)
    // }
    // return samePerson
}
console.log("Bài 9:",sameName());

//*** */Bài 10
const employees10 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
const bestWorkingEmp = employees10.reduce((max, employee) => {
    const normalEfficient = employee.workingDays / employee.salary;
    const maxEfficient = max.workingDays / max.salary
    return normalEfficient > maxEfficient ? employee : max
})
console.log("Bài 10: ",bestWorkingEmp);

// function productivity() {
//     let maxProduct = 0
//     let bestWorkingEmp = []
//     for (let i = 0; i < employees10.length; i++) {
//         const productivity = employees10[i].workingDays / employees10[i].salary;
//         if(productivity > maxProduct) {
//             maxProduct = productivity;
//             bestWorkingEmp = employees10[i]
//         }
//     }
//     return bestWorkingEmp
// }
// console.log("Bài 10:",productivity());

//*** */Bài 11
const employees11 = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];
function sameWorkingDays() {
    return employees11.reduce((acc, employee) => {
        let days = employee.workingDays
        if(acc[days]) {
            acc[days]++
        } else {
            acc[days] = 1
        }
        return acc
    }, {})
} 
// function sameWorkingDays() {
//     let sameWorkDays = {}
//     for (let i = 0; i < employees11.length; i++) {
//         const element = employees11[i]
//         if(sameWorkDays[element.workingDays]) {
//             sameWorkDays[element.workingDays]++
//         } else {
//             sameWorkDays[element.workingDays] = 1
//         }
//     }
//     return sameWorkDays
// }
console.log("Bài 11:",sameWorkingDays());

//*** */Bài 12
const employees12 = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];
const newInput = employees12.map(employees => {
    return {
        name: employees.name,
        email: employees.email,
        workInfor: {
            workingDays : employees.workingDays,
            lateDays : employees.lateDays
        }
    }     
    })
console.log("Bài 12:",newInput);

//*** */Bài 13
let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
// 1.
function addTask(tasks, name, description, completed) {
    tasks.push({
        name: name,
        description: description,
        completed: completed
    }
    )
}
addTask(tasks, "Gym", "Cardio", false)
console.log("Bài 13/1 :", tasks);
