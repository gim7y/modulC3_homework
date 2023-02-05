/*  С3.4 - Задание 4 - Реализовать следующее консольное приложение 
- сделать на прототипах...
Определить иерархию электроприборов. Включить некоторые в розетку. 
Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа 
и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

Есть 5 электроприборов:
- BirdUvLamp - 8 W - Uva / Uvb - 30cm - Arcadia
- PianoLamp - 3.5 W - Led - Stagg
- torch - 15 - noname - street old lamp
- DesktopPC - 450 - Flextron - stationary
- note - 45 - Huawei*/


function ElectroDevice(name, power, brand, type) {  
    this.name = name;
    this.power = power;
    this.type = type;
    this.isPlugged = false;
}

// Прибор включить
ElectroDevice.prototype.plugIn = function() {
    console.log(this.name + " is plugged");
    this.isPlugged = true;
};

// и прибор выключить
ElectroDevice.prototype.unplug = function() {
    console.log(this.name + " is unplugged");
    this.isPlugged = false;
};


function Lamp(name, power, brand, type) {  
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
}

Lamp.prototype = new ElectroDevice();


function PC(name, power, brand, type) {  
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
}

PC.prototype = new ElectroDevice();
    

// Информация по подключенным электроприборам и потребляемой электроэнергии
ElectroDevice.prototype.getPowerUsed = function() {
    let val = this.isPlugged ? this.power : 0 ;
    console.log(this.name, '-', val, 'ватт.');   
    return val 
}


const birdLamp = new Lamp('Bird lamp', 8, 'Arcadia', 'UV lamp for birds health');
const pianoLamp = new Lamp('piano Lamp', 3.5, 'Stagg', 'led');

birdLamp.plugIn(); // Уф-лампа для птиц - заменяет солнечный свет, при домашнем содержании,- горит весь световой день, включается и выключается по таймеру. 
pianoLamp.plugIn();

const sconce = new Lamp('torch', 15, 'noname', 'wall light');
sconce.feature = 'street old lamp';
sconce.unplug();

const homePC = new PC("Table PC", 450, "Flextron", "stationary");
const note = new PC("laptop", 45, "Huawei");

homePC.plugIn(); // компьютер включили в розетку
note.unplug(); // ноутбук отключили от сети

sconce.feature = 'street old lamp';

console.log( '=========' );
// результат
// console.log(homePC);
// console.log(note); 
// console.log(birdLamp);
// console.log(sconce);
// console.log(pianoLamp);


birdLamp.getPowerUsed()
pianoLamp.getPowerUsed()
sconce.getPowerUsed()
homePC.getPowerUsed() 
note.getPowerUsed()
