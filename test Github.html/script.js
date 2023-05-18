function addCard(){
   document.getElementById("addFlashcard").style.display  = "block";
}

function closeCard(){
    document.getElementById("addFlashcard").style.display  = "none";
}

 function selectCard(){
    document.getElementById("newFlashcards").innerHTML = "";
}

 function addNewFlashcard(){
    let flashcard = document.createElement("div");
    let question = document.createElement("h1");
    let answer = document.createElement("h1");

    question.textContent = document.getElementById("question").value;
    answer.textContent = document.getElementById("answer").value;

    flashcard.appendChild(question);
    flashcard.appendChild(answer);

    document.getElementById("newFlashcards").appendChild(flashcard);

    flashcard.className = "flashcard";
    question.className = "question";
    answer.className = "answer";

    flashcard.addEventListener("click",function transformFlashcard(){
        if(answer.style.display == "none"){
            answer.style.display = "block";
            question.style.display = "none";
        }else {
            answer.style.display = "none"
            question.style.display = "block";
        }
    });
 }