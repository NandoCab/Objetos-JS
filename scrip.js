/*const person = {
    name: *//*["Bob", "Smith"] {*/
        /*first: "Bob",
        last: "Smith"
    },
    age: 32,
    gender: "male",
    interests: ["music", "skiing"],

    bio: function() {
        alert(this.name[0] + " " + this.name[1] +" is " + this.age + " years old we likes " + this.interests[0] + " and " + this.interests[1] + ".");
    },

    greeting: function() {
        alert("Hi I\m " + this.name["first"] + ".");
    }
}*/



/*function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert("Hi I\m " + obj.name + ".");
    };
    return obj;
}*/



function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert("Hi I\m " + this.name + ".");
    };
}

/*const salva = createNewPerson("Salva");
salva.name;
salva.greeting();*/