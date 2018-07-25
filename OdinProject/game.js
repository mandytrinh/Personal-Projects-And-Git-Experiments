function computerPlay()
{
	let options = ["Rock", "Paper", "Scissors"];
	let randomNumber = Math.floor(Math.random() * options.length);
	let randomSelection = options[randomNumber];
	return randomSelection;
}
function game()
{
	console.log("Let's start the game! Try to beat the computer in 5 rounds");
	let playerInput = "", computerOutput = "";
	let numberOfRounds = 1, yourTally = 0, computerTally = 0;
	while (numberOfRounds < 6)
	{
		playerInput = prompt("Make your guess: type in rock, paper or scissors");
		playerInput = playerInput.toString().toLowerCase();
		if (playerInput === "rock" || playerInput === "scissors" || playerInput === "paper")
		{
			computerOutput = computerPlay();
			playRound(playerInput, computerOutput);
			numberOfRounds++;
			if (numberOfRounds === 6)
			{
				endGame();
			}
		}
		else
		{
			console.log("Invalid guess, check your spelling and try again!");
		}
	}
	function playRound(playerSelection, computerSelection)
	{
		computerSelection = computerSelection.toString().toLowerCase();
		let youWin = false, isTie = false, message = "";
		if (playerSelection === "rock")
		{
			if (computerSelection === "scissors")
			{
				youWin = true;
			}
			else if (computerSelection === "rock")
			{
				isTie = true;
			}
		}
		else if (playerSelection === "scissors")
		{
			if (computerSelection === "paper")
			{
				youWin = true;
			}
			else if (computerSelection === "scissors")
			{
				isTie = true;
			}
		}
		else if (playerSelection === "paper")
		{
			if (computerSelection === "rock")
			{
				youWin = true;
			}
			else if (computerSelection === "paper")
			{
				isTie = true;
			}
		}
		if (youWin === true)
		{
			yourTally += 1;
			message = "You win round " + numberOfRounds + ", " + playerSelection + " beats " + computerSelection;
		}
		else if (isTie === true)
		{
			message = "It's a tie for round " + numberOfRounds;
		}
		else if (youWin === false && isTie === false)
		{
			computerTally += 1;
			message = "You lose round " + numberOfRounds + ", " + computerSelection + " beats " + playerSelection;
		}
		console.log(message);
	}

	function endGame()
	{
		let result = "";
		if (yourTally > computerTally)
		{ 
			result = "You won the game! Your score: " + yourTally + ", computer's score: " + computerTally;
		}
		else if (yourTally < computerTally)
		{
			result = "You lose the game! Your score: " + yourTally + ", computer's score: " + computerTally;
		}
		else
		{
			result = "It's a tie! Your score: " + yourTally + ", computer's score: " + computerTally;
		}
		console.log(result);
		return result;
	}
	
}

game();

