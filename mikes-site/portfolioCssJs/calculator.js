        //when the document is ready run this function
        $(document).ready(function() {
            //stores inputs for user to calculate later
            var inputs = [""];
            //string to store current input
            var totalString;
            //operators array for validation without the .
            var operators1 = ["+", "-", "/", "*"]
            //oprators array with the .
            var operators2 = ["."];
            //numbers for validation
            var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


            function getValue(input) {
                if (operators2.includes(inputs[inputs.length - 1] === true && input === ".")) {
                    console.log("Ducplicat '.' ");
                } else if (inputs.length === 1 && operators1.includes(inputs) === false) {
                    inputs.push(input); //to check the first input isnt an operator
                } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
                    inputs.push(input); //to check the last input isnt a double operator like +-
                } else if (nums.includes(Number(input))) {
                    inputs.push(input);
                }

                update();
            }

            // = to array but turn into a string THEN updates the string. example "9+9" in input area
            function update() {
                totalString = inputs.join("");
                $("#steps").html(totalString);
            }
            //similar to update but takes total string and turns it into one number
            function getTotal() {
                totalString = inputs.join("");
                $("#steps").html(eval(totalString));
            }
            //if you click on that ("this") id then run this
            $("a").on("click", function() {
                if (this.id === "deleteAll") {
                    inputs = [""];
                    update();
                }
                //take off the last value... pop
                else if (this.id === "backOne") {
                    inputs.pop();
                    update();
                } else if (this.id === "total") {
                    getTotal();
                } else if (inputs[inputs.length - 1].indexOf("+", "=", "/", "*", ".") === -1) {
                    getValue(this.id)
                } else {
                    getValue(this.id)
                }
            });
        });
