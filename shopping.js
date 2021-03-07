const list = document.querySelector('.list');
const input = document.querySelector('.item__input');
const plusBtn = document.querySelector('.plus');

function onPlus(){
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const item = createItem(text);
    list.appendChild(item);
    item.scrollIntoView({block: 'center'});
    input.value = '';
    input.focus();
}
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'list__row');
    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    const itemCheck = document.createElement('button');
    itemCheck.setAttribute('class', 'item__check');
    itemCheck.innerHTML = '<i class="fas fa-check-circle"></i>';
    itemCheck.addEventListener('click', () =>{
        itemCheck.classList.toggle('checked');
    });
    const itemTitle = document.createElement('span');
    itemTitle.setAttribute('class', 'item__title');
    itemTitle.innerText = text;
    const itemRemove = document.createElement('button');
    itemRemove.setAttribute('class','item__remove');
    itemRemove.innerHTML = '<i class="fas fa-trash-alt"></i>';
    itemRemove.addEventListener('click', ()=>{
        list.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'divider');

    item.appendChild(itemCheck);
    item.appendChild(itemTitle);
    item.appendChild(itemRemove);
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}
plusBtn.addEventListener('click', ()=>{
    onPlus();
});

input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        onPlus();
    }
});