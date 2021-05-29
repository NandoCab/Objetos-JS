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



/*function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert("Hi I\m " + this.name + ".");
    };
}*/

/*const salva = createNewPerson("Salva");
salva.name;
salva.greeting();*/

//Parte 1

function Person(first, last, age, gender, interests) {
    this.name = {
        first : first,
        last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() /*{
        alert(this.name.first + " " + this.name.last + " is " + this.age + " yeras old. He likes " + this.interests[0] + " and " + this.interests[1] + " . ");
    };
    this.greeting = function() {
        alert("Hi I\m " + this.name.first + " . ");
    };
}*/ /*Parte 2*/ 
    {
        var string = this.name.first + " " + this.name.last + " is " + this.age + " years old ";
        var pronoun;

        if(this.gender === "male" || this.gender === "Male" || this.gender === "m" || this.gender === "M") {
            pronoun = "He likes ";
        } else if(this.gender === "female" || this.gender === "Female" || this.gender === "f" || this.gender === "F") {
            pronoun = "She likes ";
        } else {
            pronoun = "They like";
        }

        string += pronoun;

        if(this.interests.length === 1) {
            string += this.interests[0] + " . ";
        } else if(this.interests.length === 2) {
            string += this.interests[0] + " and " + this.interests[1] + " . ";
        } else {
            for (var i = 0; i < this.interests.length; i++) {
                if(i === this.interests.length - 1) {
                    string += " and " + this.interests[1] + " . ";
                } else {
                    string += this.interests[1] + " . ";
                }
            }
        }
        alert(string);
    };
    this.greeting = function() {
        alert("HI I\m " + this.name.first + " . ");
    };
};