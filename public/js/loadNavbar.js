async function loadNavbar() {
  const res = await fetch('navbar.html');
  const html = await res.text();
  document.getElementById('navbar-container').innerHTML = html;
}

loadNavbar();
