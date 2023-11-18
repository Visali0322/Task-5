// Simulated user data (replace this with your user database)
const users = [
    { email: 'user1@example.com', password: 'password1', fullName: 'User One' },
    { email: 'user2@example.com', password: 'password2', fullName: 'User Two' },
    // Add more users as needed
  ];
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const user = authenticateUser(email, password);
    
    if (user) {
      // Successful login - replace this with your desired action after login
      console.log(`Welcome, ${user.fullName}!`);
      // Here, you might redirect the user to another page or perform other actions
    } else {
      // Failed login - replace this with your desired action after failed login
      console.log('Invalid email or password');
    }
  });
  
  function authenticateUser(email, password) {
    // Check if the provided email and password match any user in the database
    return users.find(user => user.email === email && user.password === password);
  }
  