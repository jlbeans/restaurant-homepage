

const createNavBar = () => {
  const nav = document.createElement('nav');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');

  home.classList.add('home-tab');
  menu.classList.add('menu-tab');
  contact.classList.add('contact-tab');

  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact Us";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}
 export default createNavBar;
