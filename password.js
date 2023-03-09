
        function checkPassword() {
  var password = document.getElementById("password-input").value;
  if (password === "1234") {
    document.getElementById("password-popup").innerHTML = '<div class="loading-container"><div class="loading"></div><h2>Loading...</h2></div>';
        setTimeout(function() {
            window.location.href = "/main/main.html"; // Redirect to main.html after 1 second
        }, 500);
  } else {
    alert("Incorrect password. Please try again.");
  }
}