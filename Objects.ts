let user = {
    usr:"abd",
    age:33,
    isActive:false
}

// function Obj({name:string ,isPaid:boolean}){}


// Obj({name:"ken" ,isPaid:true})


function fn():{name: string, email:string}{
    return {name:"ek",email:'keeen'}
}

fn();

function eee(user){
return user
}

// eee(user)

// console.log(eee(user));

type User ={
    name: string;
    email:string;
    isActive: false;
}

// function createUser(user:User){}   // here user has a type User 



// function createUser(user:User): User{
    // return{name}
// }   // here musht return a value and function has alslo type 



type name ={
    readonly id:number  // here read only is just to make sure no one is able to change th unique id
    email:string
    isActive:boolean

}



export{}