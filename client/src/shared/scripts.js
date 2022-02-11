// toggle sidebar on menu button click
export const showNavbar = () => {
  // const toggle = document.getElementById("header-toggle")
  const nav = document.getElementById("nav-bar"),
    bodypd = document.getElementById("body-pd");
  // headerpd = document.getElementById("header");

  // show navbar
  nav.classList.toggle("show");

  // change icon
  // toggle.classList.toggle("bx-x");

  // add padding to body
  bodypd.classList.toggle("body-pd");

  // add padding to header
  //   headerpd.classList.toggle("body-pd");
};

// hide nav bar when user clicks on any space to hide sidebar
export const hideNavBar = () => {
  const nav = document.getElementById("nav-bar");
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
};
