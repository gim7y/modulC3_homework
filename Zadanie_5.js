 /*  С3.4 - Задание 5 - переписать задание 4 на классах.
Есть 5 электроприборов:
- BirdUvLamp - 8 W - Uva / Uvb - 30cm - Arcadia
- PianoLamp - 3.5 W - Led - Stagg
- torch - 15 - noname - street old lamp
- DesktopPC - 450 - Flextron - stationary
- note - 45 - Huawei */

// ----- --
class ElectroDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    // Электроприбор подключить к электросети
    plugIn() {
        console.log(this.name + " is plugged");
        this.isPlugged = true;
    }

    // Электроприбор отключить от электросети
    unplug() {
        console.log(this.name + " is unplugged");
        this.isPlugged = false;
    }

    // количество потребляемой электроэнергии по приборам
    getPowerUsed() {
        let ttl = 0;
        let sum = this.isPlugged ? this.power : 0;
        sum.push(ttl)
        return ttl, sum;
        console.log(sum);
    }    
}

class Lamp extends ElectroDevice {
    constructor(name, power, brand, type) {  
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.isPlugged = true;
    }
}


class Pc extends ElectroDevice {
    constructor(name, power, brand, type) {  
        super(name, power); 
        this.brand = brand;
        this.type = type;
        this.isPlugged = false; 
    }
}
    
ElectroDevice.prototype.getPowerUsed = function() {
    let sum = this.isPlugged ? this.power : 0 ;
    console.log(this.name, '-', sum, 'ватт.');
    return sum
}


const birdLamp = new Lamp('Bird lamp', 8, 'Arcadia', 'UV lamp for birds health');
const pianoLamp = new Lamp('piano Lamp', 3.5, 'Stagg', 'led');

birdLamp.plugIn(); // Уф-лампа для птиц - заменяет солнечный свет, при домашнем содержании,- горит весь световой день, включается и выключается по таймеру. 
pianoLamp.unplug();

const sconce = new Lamp('torch', 15, 'noname', 'wall light');
sconce.unplug();

const homePC = new Pc("Table PC", 450, "Flextron", "stationary");
const note = new Pc("laptop", 45, "Huawei");

homePC.plugIn(); // включен
note.unplug(); // выключен


// результатconsole.log(homePC); 
// console.log(note); 
// console.log(birdLamp);
// console.log(sconce);
// console.log(pianoLamp); 

console.log('==========');

birdLamp.getPowerUsed()
pianoLamp.getPowerUsed()
sconce.getPowerUsed()
homePC.getPowerUsed() 
note.getPowerUsed()
