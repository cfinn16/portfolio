document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector(".navbar")
  const sticky = navbar.offsetTop;

  window.onscroll = function() {addSticky()}

  const addSticky = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky")
    }
  }

})
