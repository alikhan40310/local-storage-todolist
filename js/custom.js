function blackcolor(){
    document.body.style.backgroundColor= "black";
    document.body.style.transition = "0.8s ease";
    document.body.style.padding = "0";
}
function originalcolor(){
    
    document.body.style.backgroundColor= "white";
    document.body.style.transition = "0.8s ease";
    document.body.style.padding = "10px";

}
function addValue(num1,num2){
    var x = num1 + num2;
    return x



}

const total = addValue(5,8)
const total3 = addValue(55,33)
console.log(total, total3)