document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    
    const userData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      address: address
    };
  
    // Simulating sending data to a server (replace with your actual server endpoint)
    sendDataToServer(userData);
    
    // For demonstration purposes, let's log the collected data
    console.log("User Data:", userData);
  });
  
  function sendDataToServer(data) {
    // In a real application, use fetch or other methods to send data to the server
    // For example:
    // fetch('your-server-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
    console.log("Sending data to the server:", data);
  }
  