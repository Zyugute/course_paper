var code1=0
const arr=[
    {
        employee_number:1,
        Nickname:"Skino1",
        Last_name:"Варламов",
        First_Name:"Сергей",
        Patronymic:"Максимович",
        employee_code:code1,
    },
    {
        employee_number:2,
        Nickname:"Zyugute",
        Last_name:"Мозер",
        First_Name:"Николай",
        Patronymic:"Алекландрович",
        employee_code:code1,
    },
    {
        employee_number:3,
        Nickname:"BUTCHER31",
        Last_name:"Шутка",
        First_Name:"Всеволод",
        Patronymic:"Анатольевич",
        employee_code:code1,
    },
    {
        employee_number:4,
        Nickname:"huggesss",
        Last_name:"Кулев",
        First_Name:"Тимур",
        Patronymic:"",
        employee_code:code1,
    },
]
arr[0].employee_code=(arr[0].employee_number.toString()+[...arr[0].Nickname].length+[...arr[0].Last_name].length+[...arr[0].First_Name].length+[...arr[0].Patronymic].length)
arr[1].employee_code=(arr[1].employee_number.toString()+[...arr[1].Nickname].length+[...arr[1].Last_name].length+[...arr[1].First_Name].length+[...arr[1].Patronymic].length)
arr[2].employee_code=(arr[2].employee_number.toString()+[...arr[2].Nickname].length+[...arr[2].Last_name].length+[...arr[2].First_Name].length+[...arr[2].Patronymic].length)
arr[3].employee_code=(arr[3].employee_number.toString()+[...arr[3].Nickname].length+[...arr[3].Last_name].length+[...arr[3].First_Name].length+[...arr[3].Patronymic].length)
//arr[0].employee_code=(arr[0].employee_number.toString()+[...arr[0].Nickname].length+[...arr[0].Last_name].length+[...arr[0].First_Name].length+[...arr[0].Patronymic].length)
//arr[0].employee_code=(arr[0].employee_number.toString()+[...arr[0].Nickname].length+[...arr[0].Last_name].length+[...arr[0].First_Name].length+[...arr[0].Patronymic].length)
console.table(arr)