const createFooter = () => {
  const footer = document.createElement('footer');
  const footerItem = document.createElement('p');
  footerItem.classList.add("footer-text");
  footerItem.innerHTML = "Backround image created by Goumbik - www.pixabay.com";
  footer.appendChild(footerItem);

  return footer;
}

export default createFooter;
