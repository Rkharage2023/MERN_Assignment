const arr = [11,20,33,40,55,60]

for (const element of arr) {
    if (element % 2 == 0) {
        console.log(element);
    }
}

arr.filter((v,i,numArr) => {
    return v % 2 == 0
})
.forEach(v => console.log(v))


arr.filter(v => v % 2 == 0).forEach(v => console.log(v))