let menu = document.querySelector('.principal-menu')

document.querySelector('.btn-menu').addEventListener('click', () => {
  menu.classList.toggle('show-menu')
  document.querySelector('.btn-close').classList.add('show')
})
document.querySelector('.btn-close').addEventListener('click', () => {
  menu.classList.toggle('show-menu')
})

ScrollReveal({ reset: true });
ScrollReveal().reveal(".info", {delay: 200})
ScrollReveal().reveal(".why-me", {delay: 200})
ScrollReveal().reveal(".my-students", {delay: 200})
ScrollReveal().reveal(".reason", {delay: 400})
ScrollReveal().reveal(".h2-reasons", {delay: 200})



