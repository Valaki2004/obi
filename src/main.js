var emps = 
[
    {
        name : "Nagy József",
        City : "Szolnok",
        Salary: 385 
    },
    {
        name : "Erős István",
        City : "Szeged",
        Salary: 395 
    },
    {
        name : "Pinta Mária",
        City : "Szolnok",
        Salary: 397 
    }
]
emps.forEach((emp) => {
    console.log(emp.name,emp.City,emp.Salary)
});
