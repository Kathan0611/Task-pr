const str="Hello123@"

const d=str.split('').filter((curr,index,arr)=>curr.search(/[a,e,i,o,u,0-9,@]/g)).join('')

console.log(d)