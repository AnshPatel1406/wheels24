<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">

<header class="site-header">
  <div class="header-inner">
    <a href="index" class="header-logo">Wheels<span class="logo-accent">24</span></a>

    <nav class="header-nav" id="header-nav">
      <ul class="nav-links">
        <li><a href="index">Home</a></li>
        <li class="nav-dropdown">
          <a href="#">Explore <span class="nav-dropdown-icon">▼</span></a>
          <ul class="dropdown-menu">
            <li><a href="index#latest-cars">New Cars</a></li>
            <li><a href="index#electric-cars">Electric Cars</a></li>
            <li><a href="index#cars-by-budget">By Budget</a></li>
          </ul>
        </li>
        <li><a href="compare-cars">Compare</a></li>
      </ul>

      <div class="header-auth">
        <div id="login-register">
          <a href="login-register" class="btn btn-primary">Login / Register</a>
        </div>
        <div id="user-info" class="user-display" style="display: none;">
          <span id="username-display"></span>
          <button id="logout-button" class="logout-icon" title="Logout">⎋</button>
        </div>
      </div>
    </nav>

    <div class="hamburger" id="hamburger" onclick="document.getElementById('header-nav').classList.toggle('active'); this.classList.toggle('active');">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>
