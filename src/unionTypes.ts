/* los union types ofrecen flexibilidad, mucho mejor que any  */

/* es darle dos o mas tipos a una variable */
let userID: string | number;

userID = 234;
userID = "q35sdfareeqf";

function saludar(myText : string | number){
if(typeof myText == "number"){
    console.log("ES un número");
}else{
    console.log(myText.length)
}

}
saludar("Que hondas");
saludar(234);
