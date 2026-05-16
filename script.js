let inputEl = document.getElementById('inputEl');
let addBtnEl = document.getElementById('addBtnEl');
let ulEl = document.getElementById('ulEl');


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

    else {
        ulEl.insertAdjacentHTML("beforeend", newList);
        inputEl.value = "";
    }
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
    }


    // DELETE

    if (e.target.classList.contains("delEl")) {
        e.target.closest("li").remove();
    }

});