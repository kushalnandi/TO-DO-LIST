let counter = 1;

function add_task() {
    // Fatching the Input
    const input_ele = document.querySelector("input");
    
    // Store the Input data
    const data = input_ele.value;

    // Creating the div     
    const new_ele = document.createElement("div");

    // Setting id
    new_ele.setAttribute("id" , counter);

    // Adding Style to the DIV
    new_ele.style = 'display: flex; justify-content: center; margin: 2%';
    
    // Creating the UI of the Task
    new_ele.innerHTML = "<div>" + '&#x1F4CC' + '  ' + data + "</div> <button onclick = 'delete_task(" + counter + ")' style = 'margin-left: 10%'> Delete </button>";

    // Fatching the Parent Div
    const parent_ele = document.querySelector("todos");
    
    // Finally Adding the div to show to the user
    parent_ele.appendChild(new_ele);

    document.getElementById(inpu).reset();
    
    counter =  counter + 1;
}

function delete_task(index) {
    const ele = document.getElementById(index);
    ele.parentNode.removeChild(ele);
}