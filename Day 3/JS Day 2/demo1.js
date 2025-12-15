//1st way to create object 
const s1 = {}
s1.name = "Rushikesh"
s1.age = 20
s1.mobile = "1234567890"
s1["email id"] = 'rushikesh@gmail.com'
console.log(s1)

const s3 = {
    "name" : "Rushikesh",
    "age" : 30,
}
s3.mobile = "1234567890"
s3["email id"] = 'rushi@gmail.com'

console.log(s3)

//2nd way to create the object
const s4 = new Object()
s4.name = "Rushi"
s4.age = 20
s4.mobile = "1234567890"
s4["email id"] = 'rushi@gmail.com'
console.log(s4)

//3rd way to create the object
function Student(name , age ){
    this.name = name
    this.age = age
}

const s5 = new Student("anil",35)
s5.mobile = "1234561230"
s5["email id"] = 'anil@gmail.com'
console.log(s5)

