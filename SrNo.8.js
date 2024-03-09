const str="Hello123@"

const d=str.split('').filter((curr,index)=>index%2!=0).join('')
console.log(d)