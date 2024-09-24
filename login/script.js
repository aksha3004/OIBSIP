document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      alert('Username already exists');
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful');
      window.location.href = 'index.html'; 
    }
  });
  
  document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const validUser = users.find(user => user.username === username && user.password === password);
    if (validUser) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'secured.html'; 
    } else {
      alert('Invalid username or password');
    }
  });
  
 
  if (localStorage.getItem('loggedInUser')) {
    window.location.href = 'secured.html';

  }
  