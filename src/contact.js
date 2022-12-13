const contact = () => {
  const container = document.createElement('div')
  container.classList.add('container');

  const title = document.createElement('h1');
  title.innerHTML = "Contact Us";
  container.appendChild(title);

  const phone = document.createElement('p');
  phone.innerHTML = '555-555-5555';
  container.appendChild(phone);

  const email = document.createElement('p');
  email.innerHTML = 'martinsrestaurant@info.com';
  container.appendChild(email);

  const message = document.createElement('p');
  message.innerHTML =
  "Give us a call or shoot us an email to get in touch. We'll get back to you promptly.";
  container.appendChild(message);

  return container;
};

const loadContact = () => {
  const content = document.getElementById('content');
  content.classList.add('contact');
  const footer = document.querySelector('footer');
  content.insertBefore(contact(), footer);
};

export default loadContact;
