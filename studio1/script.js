(function(){      
    "use strict"; 
    console.log(`reading js`);
    
    const myform=document.getElementById(`smallTitle`);
    const par=document.getElementById(`par`);
    const button=document.querySelector(`#button`);
    
    let isShow =false;

    button.addEventListener(`click`, function(event){
        
        const qt1=document.getElementById(`qt1`).value;
        const qt2=document.getElementById(`qt2`).value;
        const qt3=document.getElementById(`qt3`).value;
        const qt4=document.getElementById(`qt4`).value;
        const qt5=document.getElementById(`qt5`).value;
        
        const text=document.getElementById(`text`);

        text.innerHTML = (`On <span class="text01">${qt1}</span> night, Zoey and Ishtar were in the jungle near their backyard taking pictures of their antique car for sale. Suddenly there was a rustling sound around them and Zoey told Ishtar to run, so she did. As Ishtar runs away, she hears a <span class="text01">${qt2}</span> sound. It seemed like someone had fizz into their car. Ishtar felt <span class="text01">${qt3}</span>, so she immediately ran back home. She came home and saw Zoey reading the newspaper in front of her desk When she told Zoey what had just happened, Zoey said she had been at home reading the <span class="text01">${qt4}</span> and watch <span class="text01">${qt5}</span>.`);

        

        if (qt1 == '' || qt2 == '' || qt3 == '' || qt4 == '' || qt5 == '') {
			alert('Please enter the word');
		} else {
			isShow = !isShow;

			if (isShow == true) {
				smallTitle.style.display = 'none';
				par.style.display = 'block';
				button.innerHTML = 'Back';
	
			} else {
				smallTitle.style.display = 'block';
				par.style.display = 'none';
				button.innerHTML = 'Next';
				location.reload([true]) 
			}

		}
	})
}());