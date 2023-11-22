var  obj1={
    name:"sunny",
    email:"sunny@20gmail.com",
    mobile:12345678,
    gender:"male",
    history:"history"
}
console.log(obj1);
function obj2(nameval,emailval,mobval,genval,hisval){
   return {
    
    name:"nameval",
    email:"emailval",
    mobile:mobval,
    gender:"genval",
    history:"hisval"
   }
}
var ans=obj2("sunny",
"sunny@20gmail.com",
12345678,
"male",
"history")
console.log(ans);