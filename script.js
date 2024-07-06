const addItem_button = document.querySelector('#add-item-button');
let inputValue = "";

let items = [];
let itemsCount = 0;

const addInput = document.getElementById("add-item-input");

addInput.addEventListener("keydown", (e) => {
    inputValue = addInput.value;
    if(e.key == "Enter" && !(inputValue == "" || inputValue == undefined)){
        addItem(inputValue);
    }
});


// Call function addItem when clicking the addItem button
addItem_button.onclick = function(){
    inputValue = addInput.value;
    if(!(inputValue == "" || inputValue == undefined)){
        addItem(inputValue);
    }
};


// Function implementation of adding a new item
function addItem(itemTitle){
    // List of all the item containers
    items[itemsCount] = itemTitle;
    itemsCount++;
    localStorage.setItem("itemsCount", itemsCount);
    localStorage.setItem("items", JSON.stringify(items));
    document.getElementById('add-item-input').value = "";

    // Item container creation and assignment
    const itemContainer = document.createElement("div");
    itemContainer.className = "item-container";
    document.getElementById("main-container").appendChild(itemContainer);

    // Item Title Div creation
    const lastContainer = document.getElementById("main-container").lastElementChild;
    const itemTitleDiv = document.createElement('div');
    itemTitleDiv.id = "item_title";
    lastContainer.appendChild(itemTitleDiv);
    itemTitleDiv.innerText = inputValue;

    // Buttons Creation
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = "buttons";
    lastContainer.appendChild(buttonsDiv);

    const editButton = document.createElement('button');
    editButton.id = "edit_button";
    buttonsDiv.appendChild(editButton);

    const delButton = document.createElement('button');
    delButton.id = "del_button";
    buttonsDiv.appendChild(delButton);

    // Button Image Creation
    const delImg = document.createElement('img');
    delImg.id = "del-img";
    delImg.src = "remove_icon.png";
    delButton.appendChild(delImg);

    const editImg = document.createElement('img');
    editImg.id = "edit-img";
    editImg.src = "edit.png";
    editButton.appendChild(editImg);
}