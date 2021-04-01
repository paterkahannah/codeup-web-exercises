"use strict";

// psuedo code, use it

var tacoma  = {
    make: 'Toyota',
    model: 'tacoma',
    truck: true,
    seat: 5,
    color: 'blue',
    mileage: 10,
    drive: function (){
        console.log('vroom');
        this.mileage++;
    }
}

function isNew(car) {
    return car.mileage <= 15;
}











