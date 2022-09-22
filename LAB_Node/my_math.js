
let math=(function(){

    {
        const pi=3.14;
        const subtract=function(x,y){
           return x-y;
        };
        const multiply=function(x,y){
           return x*y;
        };
       const divide=function(x,y){
           return x/y;
       };
       const add=function(x,y){
           return x+y;
       };
       return {
           pi:pi
           ,subtract:subtract
           ,multiply:multiply
           ,divide:divide
           ,add:add
       }
   }

}());

module.exports=math;
