

    let currentSlide = 0;
    const slides = document.getElementById("slide-container");
    const totalSlides = slides.children.length;

    function showSlide(index) {
      if (index >= totalSlides) currentSlide = 0;
      else if (index < 0) currentSlide = totalSlides - 1;
      else currentSlide = index;

      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    setInterval(() => {
      nextSlide();
    }, 4000); 
   
  