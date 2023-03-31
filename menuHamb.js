const btnHamb = document.getElementById('btnHamb')
const menu = document.getElementById('menu')

btnHamb.addEventListener('click', function() {
  if (menu.classList.contains('show'))
    menu.classList.remove('show')
  else
    menu.classList.add('show')

  // menu.classList.toggle('show');
  alert("Marco est de droite, quiconque le contredira est un fou")
})