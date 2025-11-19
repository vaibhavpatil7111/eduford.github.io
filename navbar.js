// Navbar component
function loadNavbar() {
  const navbarHTML = `
    <nav>
      <a href="index.html"><img src="img/logo.png" /></a>
      <div class="nav-links" id="navLink">
        <i class="fa fa-times" onclick="hideMenu()"></i>
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li><a href="about us.html">ABOUT US</a></li>
          <li><a href="course.html">COURSE</a></li>
          <li><a href="blog.html">BLOG</a></li>
          <li><a href="contact.html"> CONTACT </a></li>
        </ul>
      </div>
      <i class="fa fa-bars" onclick="showMenu()"></i>
    </nav>
  `;
  
  // Insert navbar into the element with id="navbar-container"
  document.getElementById('navbar-container').innerHTML = navbarHTML;
}

// Menu toggle functions
function showMenu() {
  document.getElementById("navLink").style.right = "0px";
}

function hideMenu() {
  document.getElementById("navLink").style.right = "-200px";
}

// Navbar scroll effect
function handleNavbarScroll() {
  const nav = document.querySelector('nav');
  const header = document.querySelector('.header');
  const subHeader = document.querySelector('.sub-header');
  
  if (header) {
    // For index page with .header section
    const headerHeight = header.offsetHeight;
    if (window.scrollY > headerHeight - 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  } else if (subHeader) {
    // For other pages with .sub-header section
    const subHeaderHeight = subHeader.offsetHeight;
    if (window.scrollY > subHeaderHeight - 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  } else {
    // Fallback for pages without header sections
    nav.classList.add('scrolled');
  }
}

// Load navbar when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);
});