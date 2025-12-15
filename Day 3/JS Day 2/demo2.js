//Array 
const arr = []

console.log(arr)
console.log(`type of arr - ${typeof(arr)}`)

const arr1 = [10,20]
console.log(arr1)
const arr2 = new Array()
console.log(arr2)

arr1.push(30)
arr1.push(40)
arr1.push(50)
arr1.pop()

//to iterate the array
for(let i =0 ;i<arr1.length ; i++)
    console.log(`element - ${arr1[i]}`)

console.log(arr1)
//for-of loop 
for (const element of arr1) {
    console.log(`element - ${element}`)   
}

//array of function
const arr3 = [
    function(n1,n2){return n1 + n2 },
    ((n1,n2) => n1 - n2 )
]
console.log(arr3)
console.log(arr3[0])
console.log(arr3[0](50,30))
console.log(arr3[1](50,30))

//array of object 
const arr4 = [ {
    "name" : "Rushikesh",
    "age" : 35,
},
{
    "name" : "Manthan",
    "age" : 36,
},
{
    "name" : "Shivam",
    "age" : 37,
}]

arr4[1].mobile = "1234567890"
arr4[1]["email id"] = 'manthan@gmail.com'
console.log(arr4)