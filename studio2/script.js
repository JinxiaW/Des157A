(function(){
    `use strict`;
    console.log(`reading js`);
    
    document.getElementById("cat1").onmouseover=function(){
        document.getElementById("bg").style.opacity="0.8";
    };
    document.getElementById("cat1").onmouseout=function(){
        document.getElementById("bg").style.opacity="1";
    };
	
	document.getElementById("cat2").onmouseover=function(){
	    document.getElementById("bg").style.opacity="0.8";
	};
	document.getElementById("cat2").onmouseout=function(){
	    document.getElementById("bg").style.opacity="1";
	};
	
	document.getElementById("cat3").onmouseover=function(){
	    document.getElementById("bg").style.opacity="0.8";
	};
	document.getElementById("cat3").onmouseout=function(){
	    document.getElementById("bg").style.opacity="1";
	};
	
	document.getElementById("cat4").onmouseover=function(){
	   document.getElementById("bg").style.opacity="0.8";
	};
	document.getElementById("cat4").onmouseout=function(){
	    document.getElementById("bg").style.opacity="1";
	};
    
	// When the user hovers the mouse over the cat's paw, the background opacity to give the user a hint.
	
	
    document.addEventListener(`mousemove`,mousePos);
    const theImg=document.getElementById('catV');
    let prevLoc=0;


    function mousePos(event){
        const windowSize = window.innerWidth;
        const percent2px = windowSize /86;
        const xPos = event.clientX;
        const changePhoto = Math.floor(xPos / percent2px);

        if(changePhoto !==prevLoc) {
            theImg.src =`images/${changePhoto}.jpg`;
            prevLoc=changePhoto;
            console.log(prevLoc);
        }
		
    }
    // Learned from the course how to use video to do mouse interaction effects.
})();