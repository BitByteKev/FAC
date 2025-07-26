let car = {
    model: "Mustang",
    year: 2025,
    color: "Blue",
    type: "GT",
    start: function() {
       alert("Car started");
        console.log("Car is now running.")
    },
    stop: function() {
        alert("Car stopped");
        console.log("Car has halted.")
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("carModel").innerText = car.model;
    document.getElementById("carYear").innerText = car.year;
    document.getElementById("carColor").innerText = car.color;
    document.getElementById("carType").innerText = car.type;
});

 let arrKeys = Object.keys(car);
 for(let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
 }

console.log("Car properties:", arrKeys);

let arrEntries = Object.entries(car);
console.log("Arr Entries:", arrEntries);    

for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}




