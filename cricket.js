document.addEventListener("DOMContentLoaded", function() {
    let dog = { 
        name: "Cricket",
        age: 5,
        color: "brown",
        breed: "Terrier"
    }
    document.getElementById("dogName").innerText = dog.name;
    document.getElementById("dogAge").innerText = dog.age;
    document.getElementById("dogColor").innerText = dog.color;
    document.getElementById("dogBreed").innerText = dog.breed;

    // Instance of Jack the Chihuahua
    let Jack = new Dog('Jack', 5, 'Beige', 'Chihuahua');

    // Attach click event to the button that changes innerText of dogBark
document.getElementById("barkButton").addEventListener("click", function() {
    document.getElementById("dogBark").innerText = Jack.bark();
    });
});


class Dog {
    constructor(name, age, color, breed) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.breed = breed;
    }   
            bark() {
        return `${this.name} says Woof!`;
    }
}