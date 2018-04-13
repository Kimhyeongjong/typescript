class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getPrint = () => {
            console.log(this.name);
            console.log(this.age);
        };
    }
}
const ps = new Person("hong", 25);
ps.getPrint();
