let messiVotes = 0;
let ronaldoVotes = 0;

let userVote = null;


const messiBtn = document.getElementById("messiBtn");
const ronaldoBtn = document.getElementById("ronaldoBtn");

const messiCount = document.getElementById("messiVotes");
const ronaldoCount = document.getElementById("ronaldoVotes");


// Messi button click
messiBtn.addEventListener("click", function(){

    if(userVote === "messi"){

        // Remove Messi vote
        messiVotes--;
        userVote = null;

        enableButtons();

    } 
    else if(userVote === null){

        // Add Messi vote
        messiVotes++;
        userVote = "messi";

        disableRonaldo();

    }

    updateVotes();
});


// Ronaldo button click
ronaldoBtn.addEventListener("click", function(){

    if(userVote === "ronaldo"){

        // Remove Ronaldo vote
        ronaldoVotes--;
        userVote = null;

        enableButtons();

    }
    else if(userVote === null){

        // Add Ronaldo vote
        ronaldoVotes++;
        userVote = "ronaldo";

        disableMessi();

    }

    updateVotes();
});


// Update vote numbers
function updateVotes(){

    messiCount.innerHTML = messiVotes;
    ronaldoCount.innerHTML = ronaldoVotes;

}


// Disable opposite button
function disableRonaldo(){

    ronaldoBtn.disabled = true;
    messiBtn.classList.add("selected");

}


function disableMessi(){

    messiBtn.disabled = true;
    ronaldoBtn.classList.add("selected");

}


// Enable both buttons
function enableButtons(){

    messiBtn.disabled = false;
    ronaldoBtn.disabled = false;

    messiBtn.classList.remove("selected");
    ronaldoBtn.classList.remove("selected");

}
