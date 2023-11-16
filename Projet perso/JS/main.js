// Initialise le carrousel avec la bibliothèque Slick
$(document).ready(function(){
    $('.carousel-container').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  });
  
  function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  }
  
  document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      if (!dropdowns[i].previousElementSibling.contains(event.target) &&
          !dropdowns[i].contains(event.target)) {
        dropdowns[i].style.display = 'none';
      }
    }
  });
  
  