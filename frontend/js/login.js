const API_BASE = "https://event-hub-mpyk.onrender.com";
async function login() {
  const identifier = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // basic validation
  if (!identifier || !password) {
    alert("All fields are required");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        identifier,
        password
      })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      // success
      alert("Login successful");
      window.location.href = "home.html";
    } else {
      // backend error message
      alert(result.message || "Login failed");
    }

  } catch (error) {
    console.error(error);
    alert("Unable to connect to server");
  }
}
