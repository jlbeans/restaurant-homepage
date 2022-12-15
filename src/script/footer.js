const createFooter = () => {
  const footer = document.createElement('footer');
  const footerItem = document.createElement('p');
  footerItem.innerHTML = "Backround image created by Goumbik from www.pixabay.com";
  footer.appendChild(footerItem);

  return footer;
}

export default createFooter;
