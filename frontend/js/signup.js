// Profile image preview
const profileInput = document.getElementById("profilePic");
const previewImg = document.getElementById("preview");

if (profileInput) {
  profileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      previewImg.src = URL.createObjectURL(file);
    }
  });
}

async function signup() {
  const name = document.getElementById("name").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const collegeUid = document.getElementById("collegeUid").value.trim();
  const department = document.getElementById("department").value;

  // basic validation
  if (!name || !username || !email || !password || !collegeUid || !department) {
    alert("All fields are required");
    return;
  }

  const data = {
    name,
    username,
    email,
    password,
    collegeUid,
    department,
    profilePic: "" // future use
  };

  try {
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      alert("Signup successful");
      window.location.href = "index.html"; // login page
    } else {
      alert(result.message || "Signup failed");
    }

  } catch (error) {
    console.error(error);
    alert("Unable to connect to server");
  }
}
