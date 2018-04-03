const catsNames = document.querySelector('.cats-names');

const c_img = document.querySelector('.cat-image');
const c_meows = document.querySelector('.cat-meows');
const c_name = document.querySelector('.cat-name');

let cats = [
  {
    name: 'Niky',
    catUrl: 'images/cat0.jpg',
    clicks: 0 },
  {
    name: 'Patty',
    catUrl: 'images/cat1.jpg',
    clicks: 0 },
  {
    name: 'Mike',
    catUrl: 'images/cat2.jpg',
    clicks: 0 },
  {
    name: 'Jay',
    catUrl: 'images/cat3.jpg',
    clicks: 0 },
  {
    name: 'Misha',
    catUrl: 'images/cat4.jpg',
    clicks: 0 }
];

function defaultDraw() {

  for (var i = 0; i < cats.length; i++) {
    catsNames.innerHTML += `<li class='${i}' >${cats[i].name}</li>`;
  };

  c_img.attributes[1].value = cats[0].catUrl;
  c_name.innerHTML = cats[0].name;
  c_meows.innerHTML = cats[0].clicks;

}

function selectedCat() {

  const catColection = catsNames.getElementsByTagName('li');
  const catLists = Array.prototype.slice.call(catColection);
  let clicked;
  catLists.forEach( function(cat) {
      cat.addEventListener('click', function() {
        clicked = this.classList[0];
        c_img.attributes[1].value = cats[this.classList[0]].catUrl;
        c_name.innerHTML = cats[this.classList[0]].name;
        c_meows.innerHTML = cats[this.classList[0]].clicks;
      });
  });

  function catClicks() {
    c_img.addEventListener('click', function() {
      let clicking = cats[clicked].clicks += 1;
      c_meows.innerHTML = clicking;
    });
  }
  catClicks();
}

defaultDraw();
selectedCat();
