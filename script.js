let header = document.querySelector('.header')
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  console.log(currentScroll)
  if (currentScroll >= 100) {
    header.style.opacity = 1;
  } else {
    header.style.opacity = 1;
  }
})