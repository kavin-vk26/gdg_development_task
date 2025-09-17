function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const pass = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;
  if (pass.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }
  if (pass !== confirm) {
    alert("Passwords do not match");
    return;
  }
  window.location.href = "welcome.html";
});

document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPassword").value;
  if (!email || !pass) {
    alert("Please fill all fields");
    return;
  }
  window.location.href = "welcome.html";
});

function onGoogleLogin(response) {
  window.location.href = "welcome.html";
}
