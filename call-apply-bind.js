// //call
// var owen = {
//     name: "Owen"
//     }
//     function sayTo(first, second){
//     console.log(this);
//     return first + " " + this.name + " " + second;
//     }
//     sayTo.call(owen, "Hi", "how are you?");
//     //this is now the owen object
//     //returns "Hi Owen how are you?"
//     //functionName.call(value of this, arg1, arg2…)


//     //apply
//     var owen = {
//         name: "Owen"
//         }
//         function sayTo(first, second){
//         console.log(this);
//         return first + " " + this.name + " " + second;
//         }
//         sayTo.apply(owen, ["Hi", "how are you?"]);
//         //this is now the owen object
//         //returns "Hi Owen how are you?"
//         //functionName.apply(value of this, [arg1, arg2 …])

// //bind
        var owen = {
            name: "Owen"
            }
            function sayTo(first, second){
            return first + " " + this.name + " " + second;
            }
            var sayToOwen = sayTo.bind(owen);

            var sayToOwen = function(first, second){
                return first + " " + owen.name + "" + second;
               }


               var owen = {
                name: "Owen"
                }
                function sayTo(first, second){
                return first +" " + this.name +" " + second;
                }
                var sayHiToOwen = sayTo.bind(owen, "Hi");

                var SayHiToOwen = function(second){
                    return "Hi" + " " + owen.name + " " + second;
                  }


                //   .call()
                //   Function.call(value of this, arg1, arg2, …)
                //   //Will execute Function
                  
                //   .apply()
                //   Function.apply(value of this, [arg1, arg2, ..])
                //   //Will execute Function
                  
                //   .bind()
                //   newFunction = Function.bind(value of this, arg1, arg2 …) 
                //   //Will return a new function