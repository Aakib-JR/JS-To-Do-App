let inputEl = document.getElementById('inputEl');
let addBtnEl = document.getElementById('addBtnEl');
let ulEl = document.getElementById('ulEl');


// GET LOCAL STORAGE

let savedTodos = localStorage.getItem("todos");

if (savedTodos) {
    ulEl.innerHTML = savedTodos;
}


// SET LOCAL STORAGE

function saveData() {
    localStorage.setItem("todos", ulEl.innerHTML);
}

// BUTTON CLICK ADD TODO

function add() {

    let newList = `
    
        <li class="listEl">

            <span class="labelEl">${inputEl.value}</span>

            <div>
                <span class="markEl">🖍</span>
                <span class="delEl">🗑</span>
            </div>

        </li>
    
    `;


    if (inputEl.value.trim() === "") {
        return;
    }

    ulEl.insertAdjacentHTML("beforeend", newList);

    // SAVE
    saveData();


    inputEl.value = "";

}


// ENTER KEY

inputEl.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        add();
    }

});


// MARK & DELETE

ulEl.addEventListener('click', (e) => {

    // MARK

    if (e.target.classList.contains("markEl")) {

        let label = e.target.closest("li").querySelector(".labelEl");
        label.classList.toggle("mark");

        // SAVE
        saveData();
    }


    // DELETE

    if (e.target.classList.contains("delEl")) {
        e.target.closest("li").remove();

        // SAVE
        saveData();
    }

});