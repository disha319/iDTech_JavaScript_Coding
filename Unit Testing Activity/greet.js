function Greet(name)
{
    if(typeof name == "object")
    {
        let nameList = ""

        for(let i = 0; i <= name.length - 1; i++)
        {
            console.log(name[i])
            nameList += ", " + name[i]
        }

        return("Hello" + nameList)
    }
    else if(name == null)
    {
        return("Hello there!")
    }
    else if(name == name.toUpperCase())
    {
        return("HELLO " + name + "!")
    }
    else
    {
        return("Hello, " + name)
    }
}

console.log(Greet('Disha'))