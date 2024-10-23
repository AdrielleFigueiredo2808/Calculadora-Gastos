document.getElementById('addButton').addEventListener('click', addItem);

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        alert('Por favor, adicione um item.');
        return;
    }

    const itemList = document.getElementById('itemList');
    const li = document.createElement('li');

    li.textContent = itemText;
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        itemList.removeChild(li);
    });

    li.appendChild(deleteButton);
    itemList.appendChild(li);
    itemInput.value = '';
}


