const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    //readline.close();

    readline.question('What is your age? ', age => {
        console.log(`Welcome ${age}`);
        if (parseInt(age)<16) {
            console.log("You’re not allowed to drive in Iowa");            
        }else{
            console.log("You’re allowed to get a drivers license in Iowa");
        }
        readline.close();
        
       });

   });
   