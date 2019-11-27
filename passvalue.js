            /* First Example */
            var first_value = 1;
            var second_value = first_value;
            first_value = 2;
            console.log(first_value);
            console.log(second_value);
            // /* Second Example */
             var first_object = {
                name: 'Alex'
            };
            var second_object = first_object;
            first_object.name = 'Alice';
            console.log(first_object);
            console.log(second_object);
            /* Third Example */
            function passByWhat(x,y,z){
                x = x+5;
                y.name = "Chocolate Cookie";
                z = {
                    name : "Coffee"
                };
            }
            var a = 2;
            var b = {
                name : "plain cookie"
            };
            var c = {
                name : "plain doughnut"
            };
            passByWhat(a,b,c);
            console.log(a);
            console.log(b.name);   
            console.log(c.name); 

            function callByValue(varOne, varTwo) {
                console.log("Inside Call by Value Method");
                varOne = 100;
                varTwo = 200;
                console.log("varOne =" + varOne + "varTwo =" + varTwo);
            }
            let varOne = 10;
            let varTwo = 20;
            console.log("Before Call by Value Method");
            console.log("varOne =" + varOne + "varTwo =" + varTwo);
            callByValue(varOne, varTwo)
            console.log("After Call by Value Method");
            console.log("varOne =" + varOne + "varTwo =" + varTwo);


            function callByReference(varObj) {
                console.log("Inside Call by Reference Method");
                varObj.a = 100;
                console.log(varObj);
            }
            let varObj = {
                a: 1
            };
            console.log("Before Call by Reference Method");
            console.log(varObj);
            callByReference(varObj)
            console.log("After Call by Reference Method");
            console.log(varObj);