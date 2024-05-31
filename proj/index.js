

getProducts();

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

function alertAddProducts() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'block';
}

document.getElementById('cancelButton').addEventListener('click', function() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'none';
});

function editProduct(){
  document.querySelector('.edit').style.display = 'block';
}
function deleteProduct(){
  document.querySelector('.delete').style.display = 'block';
}
document.getElementById('cancelButton').addEventListener('click', function() {
  document.querySelector('.edit').style.display = 'none';
});

document.getElementById('deleteCancel').addEventListener('click', function() {
  document.querySelector('.delete').style.display = 'none';
});

// Event listener for confirm buttons
document.getElementById('editConfirmButton').addEventListener('click', function() {
  // Perform edit confirmation actions here
  document.querySelector('.edit').style.display = 'none';
});

document.getElementById('deleteConfirmButton').addEventListener('click', function() {
  // Perform delete confirmation actions here
  document.querySelector('.delete').style.display = 'none';
});