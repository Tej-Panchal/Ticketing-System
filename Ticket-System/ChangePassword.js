function handleSubmit(event) {
    event.preventDefault(); // prevents the default form submission
  
    const oldPassword = document.getElementById("Old-Password").value;
    const newPassword = document.getElementById("New-Password").value;
    const confirmNewPassword = document.getElementById("Confirm-Password").value;
  
    const currentPassword = "password123"; // replace with your actual current password
  
    if (oldPassword !== currentPassword) {
      alert("Error: The old password is incorrect.");
    } else if (newPassword !== confirmNewPassword) {
      alert("Error: New password and confirmed password do not match.");
    } else {
      alert("Password changed successfully!");
    }
  }
  
  document.getElementById("change-password-form").addEventListener("submit", handleSubmit);
  