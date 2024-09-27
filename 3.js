let Tasks= [];

Tasks.push("Something");

Tasks.length;
//Tasks.forEach();
//Add task function that pushes the item into the array and prints relevant messages
let addTask= (item)=>{
    Tasks.push(item);
    console.log("Added Item to the array");
    console.log("Number of elements in the array after insertion = "+Tasks.length);
}
addTask("Something1");


//For each arrow function to list all elements in the array
let listAllTasks=()=>{
    console.log("List of array elements");
    Tasks.forEach((item)=>{
        console.log(item);
    }
    )
}
//Calls listAllTasks()
listAllTasks();
//Takes in the desired element to delete and deletes it using splice()
let deleteTask=(task)=>{
    //find index of entered value
    let index = Tasks.indexOf(task);
    //If index >-1 delete element
    if(index>-1){
        Tasks.splice(index,1);
        console.log("Deleted element "+task);
        //otherwise print error
    }else{
        console.log(task+" not found in the list");
    }
    return Tasks.length;

    
}
//Calling deleteTask()
deleteTask("ergerfg");
deleteTask("Something1");
listAllTasks();


