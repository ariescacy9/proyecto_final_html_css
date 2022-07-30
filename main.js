var btnAbrir = document.getElementById('btn-Abrir'),
btnAbrir2 = document.getElementById('btn-Abrir2'),
overlay = document.getElementById('overlay'),
register = document.getElementById('register'),
login = document.getElementById('login'),
btnCerrar = document.getElementById('btn-cerrar-popup');
btnCerrar2 = document.getElementById('btn-cerrar-popup2');

btnAbrir.addEventListener('click', function(){
  overlay.classList.add('active');
  register.classList.add('active');
});

btnAbrir2.addEventListener('click', function(){
  overlay2.classList.add('active');
  login.classList.add('active');
});

btnCerrar.addEventListener('click', function(){
  overlay.classList.remove('active');
  register.classList.remove('active');
});
btnCerrar2.addEventListener('click', function(){
  overlay2.classList.remove('active');
  login.classList.remove('active');
});