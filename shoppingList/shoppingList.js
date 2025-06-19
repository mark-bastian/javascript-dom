const shoppingService = new ShoppingService();
const pageTitle = shoppingService.getListName();
const groceries = shoppingService.getShoppingList();

function displayListTitle() {
    const titleEl = document.getElementById('title');
    titleEl.textContent = pageTitle;
}

function displayGroceries() {
    const listContainer = document.getElementById('shopping-list');
    listContainer.innerHTML = ''; // Clear any existing list items

    groceries.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('list-item');
        if (item.isComplete) {
            itemDiv.classList.add('complete');
        }

        const nameDiv = document.createElement('div');
        nameDiv.textContent = item.title;

        const qtyDiv = document.createElement('div');
        qtyDiv.classList.add('quantity-container');
        qtyDiv.innerHTML = `
            <span class="super">quantity</span>
            <span>${item.quantity}</span>
        `;

        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(qtyDiv);

        listContainer.appendChild(itemDiv);
    });
}

function markCompleted() {
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => item.classList.add('complete'));
}

function displayGroceries() {
    const listContainer = document.getElementById('shopping-list');
    listContainer.innerHTML = ''; // Clear any existing list items

    groceries.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('list-item');
        if (item.isComplete) {
            itemDiv.classList.add('complete');
        }

        // Create checkbox input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.isComplete;
        checkbox.style.marginRight = '10px';

        // When checkbox toggled, update class on parent div
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                itemDiv.classList.add('complete');
                item.isComplete = true;  // update your data model if needed
            } else {
                itemDiv.classList.remove('complete');
                item.isComplete = false;
            }
        });

        const nameDiv = document.createElement('div');
        nameDiv.textContent = item.title;

        const qtyDiv = document.createElement('div');
        qtyDiv.classList.add('quantity-container');
        qtyDiv.innerHTML = `
            <span class="super">quantity</span>
            <span>${item.quantity}</span>
        `;

        // Append checkbox first, then title and quantity
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(qtyDiv);

        listContainer.appendChild(itemDiv);
    });
}

function markCompleted() {
    const listItems = document.querySelectorAll('.list-item');
    const checkboxes = document.querySelectorAll('.list-item input[type="checkbox"]');

    listItems.forEach(item => item.classList.add('complete'));
    checkboxes.forEach(checkbox => checkbox.checked = true);

    // Optional: update your groceries data model to reflect completion
    groceries.forEach(item => item.isComplete = true);
}

displayListTitle();
displayGroceries();


