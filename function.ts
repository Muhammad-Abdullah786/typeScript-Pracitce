// function add(num){
// num.toLowerCase()            // this should not be happening
    // return num +2 
// }

// add("f")

// you can see that  the num has type of "any"

function multi(num: number){
    return num * 2
}

multi(2)


function numbers(n:number , hello:string, pass:string){
    return true
}
// the upper func is not giving an error this is wrong it should be 

// function(2,"hello" ,"jladjf")


//                    fixed 
function hello ( n:number, str: string , pas:string):boolean{
    return true //now its is good
}

//            now what about this 


function getVal(num: number):/** string boolean  now what ???*/ {
    if(num<5){
        return"good"
    }
    return false
}

// now what this function is returning 2 things boolean or string