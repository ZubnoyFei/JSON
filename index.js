'use strict'

/*JavaScript Object Notation*/

const person = {
    name: 'Alex',
    tel: '88005553535',
    parents: {
        mother: 'Jane',
        father: 'Richard'
    }
};

/*Просто так эти данные не передаются. Мы должны отформатировать их, а затем передать с фронт-энда на бэк-энд*/

//Метод stringify превращает объекты JS в нужный нам формат

//console.log(JSON.stringify(person));// result {"name":"Alex","tel":"88005553535"}


//С серверна приходит объект JSON, мы его парсим в JS и используем в коде

//console.log(JSON.parse(JSON.stringify(person))); // result { name: 'Alex', tel: '88005553535' } Мы получаем объект и уже работаем с ним


<!--Мы можем создать глубокую копию объекта, чтобы получить вложенный объект и его значения. -->
const clone = JSON.parse(JSON.stringify(person));

//stringify превратит существующий объект в формат JSON. Затем parse распарсит его обратно в объект и помести в переменную clone. При этом будет создан глубокий клон, который не зависит от
//первоначального объекта

clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);