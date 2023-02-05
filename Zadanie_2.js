/* Задание 2
Написать функцию, которая принимает в качестве аргументов 
строку и объект, а затем проверяет, есть ли у переданного 
объекта свойство с данным именем. 
ункция должна возвращать true или false. */

let obj = {
  2: 35,
  str: "Hello",
  b: 'World!'
}

function checkObj(str, obj) {
  return(str in obj)
}


let data = {
	sky: 'sun',
	sea: 'fish',
	forest: 'tree',
	garden: 'bird'
}

// console.log(checkObj('str', obj))

console.log(checkObj('bee', data))  // выведет false
