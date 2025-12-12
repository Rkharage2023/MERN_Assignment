let a = 10;
const c= 11;

function f1(){
    console.log("from function")
}

f1()

function f2(a,c){
    console.log(`a - ${a} , typeof(a) - ${typeof(a)}`)
    console.log(`c - ${c} , typeof(c) - ${typeof(c)}`)
}

f2(10,20)
f2(10,null)
f2(10,'hello')
f2(10)
f2()