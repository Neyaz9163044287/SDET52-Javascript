class Person
{
    a = 4           //variable
    static b = 6    // static variable

    constructor(fname, lname)
    {
        this.fname = fname;
        this.lname = lname;
    }

    static details()    // static method
    {
        let p1 = new Person()
        console.log(`Static Variable ${Person.b} ${this.b} Non-Static Variable ${p1.a}`);
    }

    familyDetails()     // non-static method 
    {
        let p = new Person()
        console.log(`Static ${Person.b} Non-Static ${p.a} ${this.a} Constructor Values ${this.fname} ${this.lname}`);
    }
}

// static
// Person.details()

// non-static
// let p = new Person('Neyaz', 'Zayen')
// p.familyDetails();
// console.log(p.fname);
// console.log(p.lname);

class Student extends Person
{
    constructor(fname, lname, age)
    {
        super(fname, lname)         // call the parent class constructor
        this.age = age
    }

    sample()
    {
        console.log(`${this.fname} ${this.lname} ${this.a} ${this.age}`);
        // console.log(`${this.fname} ${this.lname} ${this.a} ${this.age} ${this.familyDetails}`);
    }

    familyDetails()                     // overrinding parent class method
    {
        super.familyDetails()           // parent class implementation
        console.log("New Implementation");
    }
}

let d = new Student('aaaaaa', 'bbbbbbbbbb', 30)
d.sample()
d.familyDetails()

export default new Person()