
const searchInput = document.querySelector('.search-input');
const images = document.querySelectorAll('img');

searchInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    var value = searchInput.value;
    if (value) {
      window.location.href = "read.html?" + value;
      e.keyCode = '';
    }
  }
})

images[0].onclick = british;
images[1].onclick = russian;
images[2].onclick = ukrainian;


function british() {
  console.log('click img br');
//   // images[0].hidden = true;
//   // images[1].hidden = false;
//   // images[2].hidden = false;
}
function russian() {
  console.log('click img ru');

  // images[0].hidden = false;
  // images[1].hidden = true;
  // images[2].hidden = false;
}
function ukrainian() {
  console.log('click img uk');
  // images[0].hidden = false;
  // images[1].hidden = false;
  // images[2].hidden = true;
}
