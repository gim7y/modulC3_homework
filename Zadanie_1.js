/*  Задание 1

Написать, функцию, которая принимает в качестве аргумента 
объект и выводит в консоль все ключи и значения только 
собственных свойств. Данная функция не должна возвращать 
значение.  */

let objB = {
	a: 12,
	b: '24',
	c: true,
};

objB.msg = "Здравствуй, Солнце!";


function printObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    };
  }
}

printObject(objB);
