class Person {

    constructor(private name: string, private age: number){}

    public getPrint = (): void => {
        console.log(this.name);
        console.log(this.age);
    }
}

const ps = new Person("hong", 25);
ps.getPrint();

