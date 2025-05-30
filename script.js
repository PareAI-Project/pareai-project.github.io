$(document).ready(function () {
  // Mobile menu toggle
  $("#menu-toggle").click(function () {
    $("#mobile-menu").toggleClass("hidden");
  });

  // Close mobile menu when clicking on a link
  $(".mobile-nav-link").click(function () {
    $("#mobile-menu").addClass("hidden");
  });

  // Navbar scroll effect
  $(window).scroll(function () {
    const navbar = $("#navbar");
    if ($(window).scrollTop() > 50) {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });

  // Active navbar functionality
  function updateActiveNav() {
    const sections = ["home", "about", "subscribe"];
    const scrollPos = $(window).scrollTop() + 100; // offset for navbar height

    let currentSection = "home"; // default

    sections.forEach(function (section) {
      const element = $("#" + section);
      if (element.length) {
        const offsetTop = element.offset().top;
        const height = element.outerHeight();

        if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
          currentSection = section;
        }
      }
    });

    // Update desktop nav
    $(".nav-link").removeClass("active");
    $('.nav-link[data-section="' + currentSection + '"]').addClass("active");

    // Update mobile nav
    $(".mobile-nav-link").removeClass("active");
    $('.mobile-nav-link[data-section="' + currentSection + '"]').addClass(
      "active"
    );
  }

  // Initial call
  updateActiveNav();

  // Update on scroll
  $(window).scroll(function () {
    updateActiveNav();
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80, // offset for fixed navbar
        },
        800
      );
    }
  });
});
