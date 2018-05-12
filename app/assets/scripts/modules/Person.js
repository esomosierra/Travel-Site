class Person {

    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        alert("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
    
}

//module.exports = Person; NODEJS WAY
export default Person; // NATIVE ES6 JAVASCRIPT WAY USING BABEL