
const title_elem = document.querySelector('.article-title'),
  description_elem = document.querySelector('.article-description');
var searchInput = window.location.search;
document.querySelector('.back').onclick = function () {
  back()
};

var search = window.location.search.substr(1);
// var search = window.location.search.substring(1);


if (search) {
  var api1 = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaitext&redirects+1&titles=" + search;
  var api2= "https://ru.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaitext&redirects+1&titles=" + search;
  var api3 = "https://uk.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaitext&redirects+1&titles=" + search;

  fetch(api1)
    .then(response => response.json())
    .then(response => {
      response = response.query.pages;
      var pageid = Object.keys(response)[0];
      var extract = response[pageid].extract;

      // title_elem.innerHTML = search;
      title_elem.innerHTML = decodeURI(searchInput).slice(1);
      description_elem.innerHTML = extract;
  })
}
function back() {
  window.location.href = "index.html";
}

function british() {
  console.log('click img br');
  // images[0].hidden = true;
  // images[1].hidden = false;
  // images[2].hidden = false;
}