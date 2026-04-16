// DOM elemek kijelölése
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Hozzáadás funkció
const addTask = () => {
    const taskText = inputField.value.trim();

    // Csak akkor adunk hozzá, ha nem üres a mező
    if (taskText !== "") {
        // 1. Új <li> elem létrehozása
        const li = document.createElement('li');
        li.textContent = taskText;

        // 2. Kattintás esemény hozzáadása az áthúzáshoz
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // 3. Hozzáadás a listához
        todoList.appendChild(li);

        // 4. Mező ürítése és fókusz visszaállítása
        inputField.value = "";
        inputField.focus();
    } else {
        alert("Kérlek, írj be egy feladatot!");
    }
};

// Eseménykezelő a gombra
addButton.addEventListener('click', addTask);

// Opcionális: Enter billentyű lenyomására is adja hozzá
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});