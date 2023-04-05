const btnHamb = document.getElementById('btnHamb');
const navLinks = document.getElementById('navLinks');

btnHamb.addEventListener('click', function() {
  if (navLinks.classList.contains('show'))
    navLinks.classList.remove('show')
  else
    navLinks.classList.add('show')
});

