var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);
itemList.addEventListener('click', updateItem);

filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  var editBtn = document.createElement('button');
  editBtn.className = 'edit btn';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  itemList.appendChild(li);

  var updateBtn = document.createElement('button');
  updateBtn.className = 'update btn';
  updateBtn.appendChild(document.createTextNode('Update'));
  li.appendChild(updateBtn);
  itemList.appendChild(updateBtn);

}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function editItem(e){
  if(e.target.classList.contains('edit')) {
    var newInput = document.createElement('input');
    itemList.appendChild(newInput);
  }
}

function updateItem(e){
  if(e.target.classList.contains('update')){
    var newItem = newInput.value;
    itemList.appendChild(newItem);
  }
}

function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}