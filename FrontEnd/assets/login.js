

document.addEventListener("DOMContentLoaded", function() {
  const connexionButton = document.getElementById("connexion");

  connexionButton.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      
      emailInput.innerText = "sophie.bluel@test.tld"
      passwordInput.innerText = "S0phie"

      const email = emailInput.value;
      const password = passwordInput.value;
  });
});

