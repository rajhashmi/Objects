//  I used block so I can create obj again and again after the block

// this is normal object
{

    let obj = {
        name: "shahid",
        age: "19",
        gender: "male"
    }
    // console.log(obj);
}

// nested object :->
{
    let obj = {
        myTool: "JavaScript",
        detail: {
            information: "JavaScript is my Tool"
        }
    }
    // console.log(obj.detail);
}
//  let's make function in objects

{
    let obj = {
        name: "shahid",
        age: "19",
        gender: "male",
        myInformation(){
            console.log(`my name is ${this.name} and I'm ${this.age} years old`);
        }
    }
    // console.log(obj.myInformation());
}

// Factory Functoin 

function factoryFunction(tittle){
    return {
        title : tittle,
        greet(){
            console.log("hello how are you");
        }
    }
}
 
{
    let obj = factoryFunction("javaScript");
    // console.log(obj.title);
}

//  let's try with constructor

function Construct(tittle){
    this.title = tittle,
    this.myInformation = function(){
        // console.log(this.title);
    }
}


{
    let obj = new Construct("I love javaScript")
    obj.newFunctoin = function(){
        console.log("hello");
    }
    // console.log(Construct.constructor);
}

{
    // constructor Function 
    function Intro(name){
        this.name = name;
        console.log(this.name);
    }

    //  making with construtor Function 
    const Intro_2 =  new Function('name',`
    this.name = name;
    console.log(this.name);
    `)
    console.log(typeof Intro_2);
}


{
    // passing by value;
    let num = 10;
    let num2 = num;
    num = 15;
    // console.log(num);
    // console.log(num2);

    //  we are passing the value by variable

    // is the same in objects? aah No let's see how

    let obj = {number: 10};
     let obj2 = obj
     console.log(obj);
     console.log(obj2);
     obj2.number = 15
     console.log(obj);
     console.log(obj2);

    //   this is becausse object pass the reference like we are not cloning the object we re just passing the addreass of it

}

{

    // let clone the object 

    let obj = {number:10}
    // this is first way to do
    let obj2 = {...obj};
    // this is second way to do;

    let obj3 = Object.assign({},obj)



}

