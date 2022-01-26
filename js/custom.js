function submitFunc(){
    let valueList = document.createElement("li");
    let inValue = document.getElementById("inputtext").value;
    valueList.innerHTML = inValue;
    document.getElementById("itemList").appendChild(valueList);
}