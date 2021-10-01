const todoList=[]; //creating an array with name todolist
const todoListElement =document.querySelector("#todo-list-ul"); //fetching the element id from html to js
console.log(todoListElement);
// to add event listener to add button
document.querySelector("#add_button").addEventListener("click",addToDo); 
function keypressTodoTextHandler(e){
    console.log(e)
    if(e.keyCode==13){  //13 is the keycode for the enter key.To run the code using enter key and not by clicking.
        addToDo()
    }
}

function addToDo() {
    console.log('add clicked')
    //grab the text to be printed
    const todoText =document.querySelector("#todo_text").value;
    console.log(todoText);
    if(todoText=="") {
        return;
    }
    else {
        todoObject={
            id:todoList.length, //increase the length of array by one
            todoText:todoText, //we can also any other name instead of todoText  here.
            isdone:false,
        }
        console.log(todoObject);
        todoList.unshift(todoObject); //it will going to put the list item at starting position
        console.log(todoList);
        // display the added task
        displayTodos(); //calling the  function name displayTodos to display new task
    }
}
function displayTodos(){  //to check a function
    console.log("i am inside displayTodos function");
    todoListElement.innerText="";   
    document.querySelector("#todo_text").value="";  //line 29 and 30 ,left empty  as we want that after writing the text in search box,it should be empty
    //render list items inside the ul tag
    todoList.forEach((item) => {
        const listElement=document.createElement("li");
        listElement.innerHTML=item.todoText;  //performing an html task in js
        console.log(listElement)//checking by printing

        const delBtn= document.createElement("span");
        if(item.isDone){
            listElement.setAttribute("class","checked");
            console.log(listElement)
        }
        listElement.setAttribute("data-id",item.id)

        //ADD EVENT TO LIST ITEM
         listElements.addEventlistener("click",function(e) {
             const selectId=e.target.getAttribute("data-id");
             console.log(selectionId)
             doneToDo(selectId);
         })
        todoListElement.appendChild(listElement);
        listElement.appendChild(delBtn);
    });
}
function doneToDo(selectedIdIndex) {
    const selectedIndex =todoList.findIndex((item)=> item.id==selectedId);
    console.log(todoList[selectedIdIndex]);
    todoList[selectedIdIndex].isDone=false
    ?(todoList[selectedIdIndex]).isDone=false
    :(todoList[selectedIdIndex]).isDone=true;
    console.log(todoList[selectedIdIndex]);
    displayTodos();
}