// global array
let newArray =[];

function submitFunc(){
    let valueList = document.createElement("li");
    let inValue = document.getElementById("inputtext").value;
    valueList.innerHTML = inValue; 
    document.getElementById("itemList").appendChild(valueList); 
    document.getElementById("inputtext").value = "";
    
    newArray.push(inValue);
    
    localStorage.setItem("listStorage", JSON.stringify(newArray));

}
    // for update data
    const todos = localStorage.getItem("listStorage");
    if(todos !== null){
        newArray = JSON.parse(todos);
    }
    // get item from localStorage
    // let x = JSON.parse(localStorage.getItem("listStorage"));

    for(let i=0; i<newArray.length;i++){

        let valueList = document.createElement("li");
        valueList.innerHTML = newArray[i];
        document.getElementById("itemList").appendChild(valueList);

    }

    


// //storing array in local storage
// let array = [2,4,5,6,7];
// let name = ['ali', 'ahmed', 'nouman']
// localStorage.setItem("myArray", name);
// document.getElementById("demo").innerHTML = localStorage.getItem("myArray");