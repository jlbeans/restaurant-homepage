import Beverage from '../img/beverage.jpeg'
import Entree from '../img/entree.jpeg'
import Side from '../img/side.jpeg'

const menu = () => {
  const container = document.createElement('div');
  container.className = 'container';

  const beverages = document.createElement('div'),
        beverageHeader= document.createElement('h2'),
        beverageList = document.createElement('ul'),
        beverageItems = ['Iced Tea  $2.75', 'Soft Drinks  $2.50',
          'Shirley Temple  $4', 'lemonade  $3', 'Arnold Palmer  $4'];

  beverages.classList.add('menu');
  beverageHeader.innerHTML = "Beverages";

  for (let i=0; i < beverageItems.length; i++) {
    let beverageItem = document.createElement('li');
    beverageItem.innerHTML = beverageItems[i];
    beverageList.appendChild(beverageItem);
  };

  const beverageImg = new Image();
  beverageImg.src = Beverage;
  beverageImg.className = "food-img";

  beverages.appendChild(beverageHeader);
  beverages.appendChild(beverageList);
  beverages.appendChild(beverageImg);

  const entrees = document.createElement('div'),
        entreeHeader = document.createElement('h2'),
        entreeList = document.createElement('ul'),
        entreeItems = ['Ribeye  $35', 'Roasted Chicken  $27', 'Pork Loin  $24',
          'Ribs  $24', 'Bbq Tofu  $18'];

  entrees.classList.add('menu');
  entreeHeader.innerHTML = 'Entrees';

  for (let i=0; i < entreeItems.length; i++) {
    let entreeItem = document.createElement('li');
    entreeItem.innerHTML = entreeItems[i];
    entreeList.appendChild(entreeItem);
  };

  const entreeImg = new Image();
  entreeImg.src = Entree;
  entreeImg.className = "food-img";

  entrees.appendChild(entreeHeader);
  entrees.appendChild(entreeList);
  entrees.appendChild(entreeImg);

  const sides = document.createElement('div'),
        sideHeader = document.createElement('h2'),
        sideList = document.createElement('ul'),
        sideItems = ['Mashed Potatoes  $3', 'Sweet Potato Fries  $4',
          'Roasted Veggies  $5', 'Wedge Salad  $3', 'Mac and Cheese  $2'];

  sides.classList.add('menu');
  sideHeader.innerHTML = 'Sides';

  for (let i=0; i < sideItems.length; i++) {
    let sideItem = document.createElement('li');
    sideItem.innerHTML = sideItems[i];
    sideList.appendChild(sideItem);
  };

  const sideImg = new Image();
  sideImg.src = Side;
  sideImg.className = "food-img";

  sides.appendChild(sideHeader);
  sides.appendChild(sideList);
  sides.appendChild(sideImg);

  container.appendChild(beverages);
  container.appendChild(entrees);
  container.appendChild(sides);

  return container;
};

const loadMenu = () => {
  const section = document.querySelector('.section'),
        footer = document.querySelector('footer');

  section.insertBefore(menu(), footer);
};

export default loadMenu;
