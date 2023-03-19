const mobButton = document.querySelector('.mobile');
const nav = document.querySelector
  ('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

const mobMenu = () => {

  for (link of menuItems) {
    link.addEventListener('click', mobMenu);
  }

  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
}
mobButton.addEventListener('click', mobMenu);