function add(a,b){
    return a+b;
}

const mult=(a,b)=>a*b;
const sub=(a,b)=>{
    return a-b;
}

//module.exports is used to export the functions
module.exports="Anupam Kumar";  //it exports String Anupam Kumar
module.exports=add;    //it exports function add
module.exports=mult;   //it exports function mult
module.exports=sub;    //it exports function sub

//jab hum teeno ko bari bari se export kiye to sab ek dusre ko override kr rha
//jo sabse last me aaya wahi export hoga jaise yahan pe sub hua.

module.exports={add,mult,sub};  //it exports all three functions
// acutally upar wale line me hum teeno functions ko ek object me dal ke pass kr rhe

//same thing can be written as :
module.exports={
    addFn: add,
    subFn: sub,
    multFn: mult
}

//same thing can be done individually

exports.add1=(a,b)=>a+b;
exports.sub11=(a,b)=>a-b;   //these don't override

// we can't use both these methods simultaneously, prefer either first or the second.