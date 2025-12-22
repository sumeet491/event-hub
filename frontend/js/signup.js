// Profile image preview
document.getElementById("profilePic").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("preview").src = URL.createObjectURL(file);
  }
});

async function signup() {

  const name = document.getElementById("name").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const collegeUid = document.getElementById("collegeUid").value.trim();
  const department = document.getElementById("department").value;

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
    profilePic: ""
  };

  try {
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);

    if (result.success) {
      window.location.href = "login.html";
    }

  } catch (error) {
    alert("Server error");
  }
}
