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
    function hoverButton() {
    	var title = document.querySelectorAll('.price-container-title');
    	var button = document.querySelectorAll('.price-container-button');
    	for (let a = 0; a < button.length; a++) {
    		button[a].onmouseover = function () {
    			title[a].style.background = '#49cbcd';
    			button[a].style.background = '#49cbcd'
    		}
    		button[a].onmouseout = function () {
    			title[a].style.background = '#485460';
    			button[a].style.background = '#788492'
    		}
    	}
    }
