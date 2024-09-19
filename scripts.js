// Admin credentials (use these to access the stored credentials)
const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin123';

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Check if the login is the admin
  if (email === adminEmail && password === adminPassword) {
    // Show stored credentials (admin access)
    showStoredCredentials();
  } else {
    // Save credentials for normal users
    saveCredentials(email, password);
    alert('Login successful! Your credentials have been saved.');
  }
});

// Function to save credentials to local storage
function saveCredentials(email, password) {
  const userData = { email, password };
  let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  storedUsers.push(userData);
  localStorage.setItem('users', JSON.stringify(storedUsers));
}

// Function to show all stored credentials (admin only)
function showStoredCredentials() {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
  // Clear the login page and show the admin page
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('admin-page').style.display = 'block';
  
  const credentialsList = document.getElementById('credentials-list');
  credentialsList.innerHTML = '';

  // Display the stored credentials
  if (storedUsers.length > 0) {
    storedUsers.forEach(user => {
      const userItem = document.createElement('p');
      userItem.textContent = `Email: ${user.email}, Password: ${user.password}`;
      credentialsList.appendChild(userItem);
    });
  } else {
    credentialsList.textContent = 'No credentials stored yet!';
  }
}
