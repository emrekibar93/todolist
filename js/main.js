

let task_DOM = document.querySelector("#task")
let list_DOM = document.querySelector("#list")
let list_count = 0;
let toast1 = document.querySelector("#liveToast1")
let toast2 = document.querySelector("#liveToast2")




if (localStorage.length = !0) {
    for (let i = 0; i < localStorage.length; i++) {
        let count = localStorage.key(i)
        list_count = count.split("li")[1]
        addTodo(JSON.parse((localStorage.getItem(localStorage.key(i)))).todo, JSON.parse((localStorage.getItem(localStorage.key(i)))).isActive)

    }
}


function addTodo(Todo, isactive) {
    let li_DOM = document.createElement("li")
    li_DOM.innerHTML = `${Todo}<span id="li${list_count}" class="close" onclick="deleteElement(this)">x</span>`;

    if (isactive == true) {
        li_DOM.classList.add("checked");
    }

    list_DOM.append(li_DOM);

    task_DOM.value = "";

    list_count++;

    toast1_open()



}

function newElement() {
    if (task_DOM.value != "" && task_DOM.value != " " && task_DOM.value != null) {
        let newTodo = task_DOM.value;
        let todo_storage = { todo: newTodo, isActive: false }
        localStorage.setItem(`li${list_count}`, JSON.stringify(todo_storage));
        addTodo(newTodo);
    }
    else {
        toast2_open();
    }
}

function deleteElement(element) {
    localStorage.removeItem(element.id);
    let listItems = list_DOM.children

    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i])
        if (listItems[i].children[0].id == element.id) {
            list_DOM.removeChild(listItems[i])

        }
    }

}


list_DOM.addEventListener("click", function (event) {
    var targetElement = event.target || event.srcElement;
    checkElement(targetElement);
});

let getItem
let setItem

function checkElement(element) {
    console.log(element.children[0].id)

    if (element.classList[0] == "checked") {
        element.classList.remove("checked")
        getItem = localStorage.getItem(element.children[0].id)
        getItem = JSON.parse(getItem)
        getItem.isActive = false
        setItem = JSON.stringify(getItem)
        localStorage.setItem(element.children[0].id, setItem)

    }
    else {
        element.classList.add("checked")
        getItem = localStorage.getItem(element.children[0].id)
        getItem = JSON.parse(getItem)

        getItem.isActive = true
        setItem = JSON.stringify(getItem)
        localStorage.setItem(element.children[0].id, setItem)
    }


}

function toast1_open() {
    toast1.classList.replace("hide", "show")
    setTimeout(() => {
        toast1.classList.replace("show", "hide")
    }, 4000);
}

toast1.addEventListener("click", function (event) {
    var targetelem = event.target
    if (targetelem.innerHTML == "×") {
        toast1.classList.replace("show", "hide")
    }
})

function toast2_open() {
    toast2.classList.replace("hide", "show")
    setTimeout(() => {
        toast2.classList.replace("show", "hide")
    }, 4000);
}

toast2.addEventListener("click", function (event) {
    var targetelem = event.target
    if (targetelem.innerHTML == "×") {
        toast2.classList.replace("show", "hide")
    }
})
