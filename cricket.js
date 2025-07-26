document.addEventListener("DOMContentLoaded", function() {
    let dog = { 
        name: "Cricket",
        age: 5,
        color: "brown",
        breed: "Terrier"
    };
    document.getElementById("dogName").innerText = dog.name;
    document.getElementById("dogAge").innerText = dog.age;
    document.getElementById("dogColor").innerText = dog.color;
    document.getElementById("dogBreed").innerText = dog.breed;
});
