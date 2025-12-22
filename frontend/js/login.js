async function login() {
  const identifier = document.getElementById("email").value.trim(); 
  const password = document.getElementById("password").value.trim();

  if (!identifier || !password) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ identifier, password })
    });

    const result = await res.json();

    if (result.success) {
      alert("Login successful");

      // ✅ REDIRECT TO HOME PAGE
      window.location.href = "home.html";
    } else {
      alert(result.message);
    }

  } catch (err) {
    alert("Server error");
  }
}
