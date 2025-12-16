const arr = [12,45,23,5,2,5]

arr.map((v,i,numArr)=>{
    return v * v
}).filter(v => v % 2 == 0).forEach(v => console.log(v))

arr.map(v => v * v).filter(v => v % 2 == 0).forEach(v => console.log(v))