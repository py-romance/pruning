
        let slideIndex = 1;
        const totalSlides = 9;

        function showSlide(n) {
            const slides = document.getElementsByClassName('slide');
            const dots = document.getElementsByClassName('dot');
            
            if (n > totalSlides) { slideIndex = 1; }
            if (n < 1) { slideIndex = totalSlides; }
            
            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            
            // Remove active class from all dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            
            // Show current slide and highlight current dot
            slides[slideIndex - 1].classList.add('active');
            dots[slideIndex - 1].classList.add('active');
            
            // Update slide counter
            document.getElementById('currentSlide').textContent = slideIndex;
            
            // Update button states
            document.getElementById('prevBtn').disabled = slideIndex === 1;
            document.getElementById('nextBtn').disabled = slideIndex === totalSlides;
        }

        function changeSlide(n) {
            slideIndex += n;
            showSlide(slideIndex);
        }

        function currentSlide(n) {
            slideIndex = n;
            showSlide(slideIndex);
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (event.key === 'ArrowRight') {
                changeSlide(1);
            }
        });

        // Initialize
        showSlide(slideIndex);

        // Auto-advance slides every 30 seconds (optional)
        // setInterval(function() {
        //     if (slideIndex < totalSlides) {
        //         changeSlide(1);
        //     }
        // }, 30000);
  