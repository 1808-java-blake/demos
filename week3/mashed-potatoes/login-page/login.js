function login(event) {
  event.preventDefault();
  let username = document.getElementById('inputUsername').value;
  let password = document.getElementById('inputPassword').value;

  if (username === 'bob' && password === 'pass') {
    window.location = '../home/home.html'
  };
}