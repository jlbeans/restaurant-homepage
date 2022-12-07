import './style.css';
import Background from './background.jpeg';

 function content() {
  const mainElement = document.createElement('div');
  mainElement.classList.add('main');
  const myImg = new Image();
  myImg.src = Background;

  mainElement.append(myImg);

  return mainElement;
};
document.body.appendChild(content());
