let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
     searchForm.classList.remove("active");
     cartItem.classList.remove("active");
};
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
   navbar.classList.remove("active");
   cartItem.classList.remove("active");
};
let cartItem = document.querySelector(".cart-items-container");
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
   navbar.classList.remove("active");
   searchForm.classList.remove("active");
   
};
window.onscroll = () =>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}

// scroll ho jab navigation bar me click ho
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
});
