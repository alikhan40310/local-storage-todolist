
function submitFunc(){
   
    let valueList = document.createElement("li");
    let inValue = document.getElementById("inputtext").value;
    valueList.innerHTML = inValue;
    document.getElementById("itemList").appendChild(valueList); 
    document.getElementById("inputtext").value = "";

        localStorage.setItem("listinStorage", inValue);
        localStorage.getItem("listinStorage");

}

// storing array in local storage
// let array = [2,4,5,6,7];
// localStorage.setItem("myArray", array);
// document.getElementById("demo").innerHTML = localStorage.getItem("myArray");