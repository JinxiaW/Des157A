(function() {
	`use strict`;
	console.log(`reading js`);

	const startButton = document.getElementById("startButton")
	const rollButton = document.getElementById("rollButton")
	const holdButton = document.getElementById("holdButton")
	const homeButton01 = document.getElementById("homeButton01"); 
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


	let isPlayer01 = true;

	const RollSound = new Audio('sound/bubble4.mp3');


	const winSound = new Audio('sound/open_door_2.mp3');


	//dice array
	const diceData = {
		dice: [`d1.png`, `d2.png`, `d3.png`, `d4.png`, `d5.png`, `d6.png`],
		players: [`player 1`, `player2`],
		score: [0, 0], 
		diceImg01: 0,
		diceImg02: 0,
		playerSum: 0,
		index: 0,
		gameEnd: 42,
		playerName:[]
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

	//layer 3 --> 2
	backArrowButton.addEventListener('click', function() {
		layer3.style.display = "none";
		layer2.style.display = "block";
	})

	//layer3 homeB back to layer 1
	homeButton01.addEventListener(`click`, function() {
		location.reload();
	});

	//refreshB 5-- >1
	replayButton.addEventListener(`click`, function() {
		location.reload();
	});


	//show current players
	document.getElementById("Player").innerHTML = `Current Player:player${diceData.index+1}`



	//Judgment of the player
	function player() {
		isPlayer01 = !isPlayer01;
		if (isPlayer01) {
			diceData.index = 0;
		} else {
			diceData.index = 1;
		}

	}

	//player
	holdButton.addEventListener(`click`, function() {
		player();
		document.getElementById("Player").innerHTML = `Current Player:player${diceData.index+1}`
		console.log("diceData.index", diceData.index);
	})

	rollButton.addEventListener(`click`, function(event) {
		playGame();
	})

	//game 
	function playGame() {
		diceData.diceImg01 = Math.floor(Math.random() * 6)+1;
		diceData.diceImg02 = Math.floor(Math.random() * 6)+1;
		diceImg01.innerHTML = `<img src="images/${diceData.dice[diceData.diceImg01-1]}">`;
		diceImg02.innerHTML = `<img src="images/${diceData.dice[diceData.diceImg02-1]}">`;

		diceData.playerSum = diceData.diceImg01 + diceData.diceImg02;
		
		if (diceData.playerSum === 2) {
			document.getElementById("Player").innerHTML = `Oh snap! Snake eyes!`;
			diceData.score[diceData.index] = 0;
			player();
		}
		else if (diceData.diceImg01 === 1 || diceData.diceImg02 === 1) {
			document.getElementById("Player").innerHTML = `Current Player:player${diceData.index+1}`;
			player();
		} 
		else {
			diceData.score[diceData.index] += diceData.playerSum;
			document.getElementById("Player").innerHTML = `Current Player:player${diceData.index+1}`;
		}
		
		checkGameSum();
	}

	//score 
	function checkGameSum() {
		if (diceData.score[diceData.index] >= diceData.gameEnd) {
			win();
		} else {
			scoreBox01.innerHTML = `${diceData.score[0]}`;
			scoreBox02.innerHTML = `${diceData.score[1]}`;
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
	
	// Default image
	diceImg01.innerHTML = `<img src="images/d0.png">`;
	diceImg02.innerHTML = `<img src="images/d0.png">`;

})();
