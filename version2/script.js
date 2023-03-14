(function() {
	`use strict`;
	console.log(`reading js`);
	 window.alert(`
	 Hello and welcome to the testing session!
	Here are the tasks and goals 
	 Test that the start button is working.
	 Test that the Back and Continue buttons are functioning properly. 
	 Verify that the game can be reset and started again, and the scores are reset to 0.`)

	const startButton = document.getElementById("startButton")
	const rollButton = document.getElementById("rollButton")
	const holdButton = document.getElementById("holdButton")
	const homeButton01 = document.getElementById("homeButton01");
	const homeButton02 = document.getElementById("homeButton02");
	const playButton = document.getElementById("playButton");
	const backbutton = document.getElementById("backbutton");
	const continueButton = document.getElementById("continueButton");
	const backArrowButton = document.getElementById("backArrow");
	const replayButton = document.getElementById("replayButton");


	const layer1 = document.getElementById("layer1");
	const layer2 = document.getElementById("layer2");
	const layer3 = document.getElementById("layer3");
	const layer4 = document.getElementById("layer4");
	const layer5 = document.getElementById("layer5");

	const diceImg01 = document.getElementById("diceImg01")
	const diceImg02 = document.getElementById("diceImg02")


	const scoreBox01 = document.getElementById("scoreBox01");
	const scoreBox02 = document.getElementById("scoreBox02");

	const playerName01 = document.getElementById("playerName01");
	const playerName02 = document.getElementById("playerName02");

	const player01Img = document.getElementById('player01Img');
	const player02Img = document.getElementById('player02Img');

	const player01Sum = document.getElementById('player01Sum');
	const player02Sum = document.getElementById('player02Sum');

	let player01 = document.getElementById("player01");
	let player02 = document.getElementById("player02");

	let isPlayer01 = true;

	const RollSound = new Audio('sound/bubble4.mp3');
	const winSound = new Audio('sound/open_door_2.mp3');

	const layer5Bg = document.getElementById(`layer5Bg`);

	//dice array
	const diceData = {
		dice: [`d1.png`, `d2.png`, `d3.png`, `d4.png`, `d5.png`, `d6.png`],
		// players: [`player 1`, `player2`],
		score: [0, 0],
		diceImg01: 0,
		diceImg02: 0,
		playerSum: 0,
		index: 0,
		gameEnd: 42,
		playerName: [`player01`,`player02`],
		playerImgList: [`player01Img`, `player02Img`],
		layer5Bg: [`player01Win`, `player02Win`]
	};

	//begin game layer 1--> layer 2
	startButton.addEventListener(`click`, function(event) {
		event.preventDefault();
		layer1.style.display = "none";
		layer2.style.display = "block";
	})

	backbutton.addEventListener('click', function() {
		layer2.style.display = "none";
		layer1.style.display = "block";
	})

	continueButton.addEventListener('click', function() {
		layer2.style.display = "none";
		layer3.style.display = "block";
	})

	//Initialize player name
	backArrowButton.addEventListener('click', function() {
		playerName01.value = '';
		playerName02.value = '';
		layer3.style.display = "none";
		layer2.style.display = "block";
	})

	//layer3 homeB back to layer 1  refesh page
	homeButton01.addEventListener(`click`, function() {
		location.reload();
	});

	//homeB 4 back to layer 1 
	homeButton02.addEventListener(`click`, function() {
		location.reload();
	});

	// Determines if the player name input is empty
	playButton.addEventListener('click', function() {
		console.log(playerName01.value);
		console.log(playerName02.value);

		if (playerName01.value != null && playerName01.value != '' && playerName02.value != null &&
			playerName02.value != '') {
			diceData.playerName[0] = playerName01.value;
			diceData.playerName[1] = playerName02.value;
			layer3.style.display = "none";
			layer4.style.display = "block";
			console.log(diceData.playerName, "yes");
		} else {
			console.log(diceData.playerName);
		}
		player01.innerHTML = diceData.playerName[0];
		player02.innerHTML = diceData.playerName[1];
	});

	//refreshB 5-- >1
	replayButton.addEventListener(`click`, function() {
		location.reload();
	});

	//Judgment of the player
	function player() {
		isPlayer01 = !isPlayer01;
		if (isPlayer01) {
			diceData.index = 0;
		} else {
			diceData.index = 1;
		}
	};

	//Switching players
	holdButton.addEventListener(`click`, function() {
		player();
		checkPlayerImg();
		// console.log("diceData.index", diceData.index);
	});

	rollButton.addEventListener(`click`, function(event) {
		playGame();
	});

	//game 
	function playGame() {
		diceData.diceImg01 = Math.floor(Math.random() * 6) + 1;
		diceData.diceImg02 = Math.floor(Math.random() * 6) + 1;
		diceImg01.innerHTML = `<img src="images/${diceData.dice[diceData.diceImg01-1]}">`;
		diceImg02.innerHTML = `<img src="images/${diceData.dice[diceData.diceImg02-1]}">`;

		diceData.playerSum = diceData.diceImg01 + diceData.diceImg02;

		if (diceData.playerSum === 2) {
			diceData.playerSum = 0;
			document.getElementById("Player").innerHTML = `Oh snap! Snake eyes!`;
			diceData.score[diceData.index] = 0;
			checkPlayerImg();
			checkPlayerScore();
			player();
		} else if (diceData.diceImg01 === 1 || diceData.diceImg02 === 1) {
			diceData.playerSum = 0;
			checkPlayerImg();
			checkPlayerScore();
			player();
			document.getElementById(`Player`).innerHTML=``;
		} else {
			checkPlayerImg();
			checkPlayerScore();
			diceData.score[diceData.index] += diceData.playerSum;
			document.getElementById(`Player`).innerHTML=``;
		}
		checkGameSum();
	}

	//score 
	function checkGameSum() {
		if (diceData.score[diceData.index] >= diceData.gameEnd) {
			win();
			layer5Bg.innerHTML =`<img class="w100" src="images/${diceData.layer5Bg[diceData.index]}.png" alt="bk5">`
		} else {
			scoreBox01.innerHTML = `${diceData.score[0]}/${diceData.gameEnd}`;
			scoreBox02.innerHTML = `${diceData.score[1]}/${diceData.gameEnd}`;
		}
	}

	function checkPlayerScore() {
		if (diceData.index === 0) {
			player01Sum.innerHTML = `<p class="text02">+${diceData.playerSum}</p>`;
		}
		if (diceData.index === 1) {
			player02Sum.innerHTML = `<p class="text02">+${diceData.playerSum}</p>`;
		}
	}

	function checkPlayerImg() {
		if (diceData.index === 0) {
			player01Img.classList.add('playerEffects');
			player02Img.classList.remove('playerEffects');
		} 
		if(diceData.index === 1){
			player02Img.classList.add('playerEffects');
			player01Img.classList.remove('playerEffects');
		}
	}
	//if win4 --> layer5
	function win() {
		winSound.play();
		layer4.style.display = "none";
		layer5.style.display = "block";
	}

	rollButton.addEventListener('mousedown', function() {
		RollSound.play();
	});

	// Default image and score
	diceImg01.innerHTML = `<img src="images/d0.png">`;
	diceImg02.innerHTML = `<img src="images/d0.png">`;

	scoreBox01.innerHTML = `${diceData.score[0]}/${diceData.gameEnd}`;
	scoreBox02.innerHTML = `${diceData.score[1]}/${diceData.gameEnd}`;

	// layer5Bg.innerHTML = `<img class="w100" src="images/bk5.png" alt="bk5">`

})();
