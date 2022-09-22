const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   let arr=[];
   let cont=0;


   let getNumber=function(){
    readline.question('Enter a number ', inp => {
    console.log(`Entered: ${inp}`);
    if (inp=='STOP') {
        readline.close();
        console.log('TOTAL SUM: '+arr.reduce((x,y)=>x+y));
        return ;
    }else{
        arr[cont]=parseFloat(inp);
        cont++;
        getNumber();
    }    

    });
    }
    getNumber();
    