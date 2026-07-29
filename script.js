// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { 
getFirestore, 
doc, 
getDoc, 
updateDoc 
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyB-gm0OpQlSHRmnTqiln25c_vJ9X9_aDtY",
    authDomain: "messiorronaldo-9a04a.firebaseapp.com",
    projectId: "messiorronaldo-9a04a",
    storageBucket: "messiorronaldo-9a04a.firebasestorage.app",
    messagingSenderId: "254193600635",
    appId: "1:254193600635:web:f56e462317b1921917fade"
};


// Firebase start
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const votesRef = doc(db, "votes", "players");


// Firebase se current votes lana
async function loadVotes(){

    const snapshot = await getDoc(votesRef);

    if(snapshot.exists()){

        const data = snapshot.data();

        messiVotes = data.messi;
        ronaldoVotes = data.ronaldo;

        updateVotes();
    }
}


// Page load hote hi votes lao
loadVotes();
console.log("Firebase connected");

let messiVotes = 0;
let ronaldoVotes = 0;

let userVote = null;


const messiBtn = document.getElementById("messiBtn");
const ronaldoBtn = document.getElementById("ronaldoBtn");

const messiCount = document.getElementById("messiVotes");
const ronaldoCount = document.getElementById("ronaldoVotes");


// Messi button
messiBtn.addEventListener("click", async function(){

    if(userVote === "messi"){

        messiVotes--;
        userVote = null;

        enableButtons();

    } 
    else if(userVote === null){

        await updateDoc(votesRef, {
    messi: messiVotes
});
        userVote = "messi";

        ronaldoBtn.disabled = true;
        messiBtn.classList.add("selected");
    }

    updateVotes();

});


// Ronaldo button
ronaldoBtn.addEventListener("click", async function(){

    if(userVote === "ronaldo"){

        ronaldoVotes--;
        userVote = null;

        enableButtons();

    } 
    else if(userVote === null){

        await updateDoc(votesRef, {
    ronaldo: ronaldoVotes
});
        userVote = "ronaldo";

        messiBtn.disabled = true;
        ronaldoBtn.classList.add("selected");
    }

    updateVotes();

});


// Update number
function updateVotes(){

    messiCount.innerHTML = messiVotes;
    ronaldoCount.innerHTML = ronaldoVotes;

}


// Enable both buttons
function enableButtons(){

    messiBtn.disabled = false;
    ronaldoBtn.disabled = false;

    messiBtn.classList.remove("selected");
    ronaldoBtn.classList.remove("selected");

}
