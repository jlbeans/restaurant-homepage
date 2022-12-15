
import createNavBar from './nav';
import createFooter from './footer';

const home = () => {
   const container = document.createElement('div');
   container.className = 'container';

   const header = document.createElement('h1');
   header.innerHTML = "Martin's Steakhouse";
   container.appendChild(header);

   const introText = document.createElement('p');
   introText.innerHTML = "Welcome! We use only the finest and freshest ingredients around!";
   container.appendChild(introText);

   const hours = document.createElement('div'),
         hoursHeader = document.createElement('h2'),
         hoursList = document.createElement('ul'),
         hoursItems = ['Monday: Closed', 'Tuesday: 4pm - 10pm',
          'Wednesday: 4pm - 10pm', 'Thursday: 4pm - 10pm', 'Friday: 4pm - 10pm',
          'Saturday: 4pm - midnight', 'Sunday: 4pm - midnight'];

    hours.classList.add('home');
    hoursHeader.innerHTML = "Hours"

   for (let i=0; i < hoursItems.length; i++) {
     let day = document.createElement('li');
     day.innerHTML = hoursItems[i];
     hoursList.appendChild(day);
     };

   hours.appendChild(hoursHeader);
   hours.appendChild(hoursList);

   const location = document.createElement('div'),
         locationHeader = document.createElement('h2'),
         locationText = document.createElement('p');

   location.classList.add('home');
   locationHeader.innerHTML = "Location";
   locationText.innerHTML = "555 High Five Dr, Somewhere Cool";

   location.appendChild(locationHeader);
   location.appendChild(locationText);

   container.appendChild(hours);
   container.appendChild(location);

   return container;
 };

 const loadHome = () => {
   if (!document.querySelector('.content')){
     const content = document.createElement('div'),
           section = document.createElement('div');
     content.className = 'content';
     section.className = 'section';

     document.body.appendChild(content);

     section.appendChild(createNavBar());
     section.appendChild(home());
     section.appendChild(createFooter());

     content.appendChild(section);
   } else {
     const section = document.querySelector('.section'),
           footer = document.querySelector('footer');
     section.className = 'section';
     section.insertBefore(home(), footer);
   }
 };

 export default loadHome;
