    var swiper = new Swiper('.swiper-container', {
    	nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev'
    });

    function openNav(x) {
    	document.getElementById("myNav").style.height = "100%";
    	x.classList.add("change");
    }

    function closeNav() {
    	document.getElementById("myNav").style.height = "0%";
    	document.querySelector(".bar-container").classList.toggle("change");
    }
