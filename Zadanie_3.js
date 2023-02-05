/* Задание 3, Мод. 3.3 
//Написать функцию, которая создает пустой объект, но без прототипа.*/

function createEmptyObjWithoutProto() {
  return Object.create(null);
}

createEmptyObjWithoutProto()

// console.log(createEmptyObjWithoutProto()) /* чтобы увидеть в консоли */
