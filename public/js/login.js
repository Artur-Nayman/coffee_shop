async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  console.log("Login attempt:", { email, password });

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    localStorage.setItem('token', data.token);
    alert("Login successful!");
    window.location.href = "/index.html";
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Network error, try again.");
  }
}
