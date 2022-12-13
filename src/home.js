
import createNavBar from './nav';
import createFooter from './footer';

const home = () => {
   const container = document.createElement('div');
   container.classList.add('container');

   const title = document.createElement('h1');
   title.innerHTML = "Martin's";
   container.appendChild(title);

   const introText = document.createElement('p');
   introText.innerHTML = "Welcome! We use only the finest and freshest ingredients around!";
   container.appendChild(introText);

   return container;
 };

 const loadHome = () => {
   const body = document.querySelector('body');
   if (!document.querySelector('#content')){
     const content = document.createElement('div');
     content.setAttribute('id', 'content');
     body.prepend(content);

     content.appendChild(createNavBar());
     content.appendChild(home());
     content.appendChild(createFooter());
   } else {
     const content = document.querySelector('#content'),
           footer = document.querySelector('footer');

     content.insertBefore(home(), footer);
   }
 };

 export default loadHome;
