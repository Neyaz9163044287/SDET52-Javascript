class People
{
    #pin = 1334     // #--> is used as private (here we dont have access specifier)
    get gpinno()
    {
        return this.#pin
    }

    set spinno(val)
    {
        this.#pin = val
    }
}

let p = new People()
console.log(p.gpinno);
p.spinno = 9874
console.log(p.gpinno);