function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  window.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slide');
    
    for (let slide of slides) {
      console.log(slides);
      slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
      });
    }
    
    function clearActiveClasses() { 
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
  });