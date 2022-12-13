const menu = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const title = document.createElement('h1');
  title.innerHTML = "Menu";
  container.appendChild(title);

  const beverages = document.createElement('h2');
  beverages.innerHTML = "Beverages";
  container.appendChild(beverages);

  const beverageContainer = document.createElement('ul'),
        beverageItems = ['Iced Tea $2.75', 'Soft Drinks $2.50',
        'Shirley Temple $4', 'lemonade $3', 'Arnold Palmer $4'];

  for (let i=0; i < beverageItems.length; i++) {
    let beverageItem = document.createElement('li');
    beverageItem.innerHTML = beverageItems[i];
    beverageContainer.appendChild(beverageItem);
  };

  container.appendChild(beverageContainer);

  const entrees = document.createElement('h2');
  entrees.innerHTML = 'Entrees';
  container.appendChild(entrees);

  const entreeContainer = document.createElement('ul'),
        entreeItems = ['Ribeye $35', 'Roasted Chicken $27', 'Pork Loin $24',
        'Ribs $24', 'Bbq Tofu $18'];

  for (let i=0; i < entreeItems.length; i++) {
    let entreeItem = document.createElement('li');
    entreeItem.innerHTML = entreeItems[i];
    entreeContainer.appendChild(entreeItem);
  };

  container.appendChild(entreeContainer);

  const sides = document.createElement('h2');
  sides.innerHTML = 'Sides';
  container.appendChild(sides);

  const sideContainer = document.createElement('ul'),
        sideItems = ['Mashed Potatoes $3', 'Sweet Potato Fries $4',
        'Roasted Veggies $5', 'Wedge Salad $3', 'Mac and Cheese $2'];

  for (let i=0; i < sideItems.length; i++) {
    let sideItem = document.createElement('li');
    sideItem.innerHTML = sideItems[i];
    sideContainer.appendChild(sideItem);
  };

  container.appendChild(sideContainer);

  return container;
};

const loadMenu = () => {
  const content = document.getElementById('content');
  content.classList.add('menu');
  const footer = document.querySelector('footer');
  content.insertBefore(menu(), footer);
};

export default loadMenu;
