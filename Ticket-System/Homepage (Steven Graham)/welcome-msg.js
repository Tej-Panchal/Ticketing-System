document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem('username');
    const permission = localStorage.getItem('permissions');
    console.log(username);
    console.log(permission);
  
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
      welcomeMessage.innerHTML = `Welcome, ${username} (Permission: ${permission})`.replace(/['"]+/g, '');
    }
  });
  