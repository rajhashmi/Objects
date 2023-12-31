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
    //  console.log(obj);
    //  console.log(obj2);
     obj2.number = 15
    //  console.log(obj);
    //  console.log(obj2);

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

{
    const array = [
        { key: 'name', value: 'Alice' },
        { key: 'age', value: 25 },
        { key: 'country', value: 'USA' },
        { key: 'gender', value: 'male' }
      ];
      let obj = {};
      for(let i = 0; i< array.length;i++){
        const item = array[i]
        obj[item.key] = item.value
    }
    console.log(obj);
}

{
    let arrs = ["a", "b", "c", "d", "e", "f", "g"];
    let obj = {};
    for(let arr in arrs){
        obj[arr] = arrs[arr]
    }
    console.log(obj);
}

{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    for(const letter of alphabet){
        if(!obj[letter]){
            obj[letter] = true
        }
    }

    console.log(Object.keys(obj));
}

{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    for(let i= 0; i< alphabet.length;i++){
        const letter = alphabet[i];
        obj[i+1] = letter
    }
    console.log(obj);
}

{
    const alphabetArray = ["a","a", "b", "c", "d", "e", "c", "f", "b", "g"];
    let obj = {};
    let counter = 1
    for(let letter of alphabetArray){

        if(!obj[letter]){
            obj[letter] = counter
            counter++
        }
    }
    console.log(obj);
} 


// object chaning

class User{
    constructor(email,username){
        this.email = email;
        this.username = username;
        this.score = 0;
    }
    login(){
        console.log(`${this.username}, just login in`);
        return this
    }
    logout(){
        console.log(`${this.username} just logout`);
        return this
    }
    updateScore(){
        console.log(this.score++);
        return this
    }
}
let userOne = new User("shahidhashmiraj@gmail.com", "shahid hashmi");
console.log(userOne)