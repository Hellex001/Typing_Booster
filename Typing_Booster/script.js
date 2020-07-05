window.addEventListener('load',init);
// for levels
const levels = {
    easy: 10,
    medium: 7,
    hard: 5,
};

// automatic change of levels
//  var index_of_text = indexOf(text);
//  console.log(index_of_text);
// if(index_of_text== 7){
//     levels.innerHTML = levels.medium;
// }

// for current levels
var currentLevel = levels.easy;

let isPlaying;

// for seconds
const seconds = document.getElementById('sec')



function init(){
seconds.innerHTML = currentLevel;
dispWords(text);
setInterval(disTime,1000);
setInterval(gameStatus, 500);
wordInput.addEventListener('input',startMatch);

}

// for main2
const changeWord = document.getElementById('main2');
const text = ['wordpress','javascript','Java', 'pytohn','moible','sky','notice','Show','Lorem','ipsum','well','done','good',
'Careful','light','background','behalf','lonely','microsoft','Nepathya','Keyboard','standard','engilsh','Grammar','snata','beech','Goal','Wla',
'fingre','sonman','hosre','good','tannishq','gshokc','nice','beware','siblings'];

// function for changeWord
function dispWords(text){
    const random = Math.floor(Math.random()*text.length);
    changeWord.innerHTML = text[random];
}

const timeDisplay = document.getElementById('time');
const mmessage = document.getElementById('message');
let time = currentLevel;
let score = 0;

//function for time
function disTime(){
    if(time>0){
        time--;
    }
    else if(time===0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}


// for game status
function gameStatus(){
    if(!isPlaying && time===0){
        mmessage.innerHTML = 'Game Over!!'
        score = 0;
    }
}

// input box

const wordInput = document.getElementById('textinput');

// function of input box

// for score
const scoreDisplay = document.getElementById('score');


function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        dispWords(text);
        wordInput.value = '';
        score++;

        }
        scoreDisplay.innerHTML = score;
    }

    var count_words = 0;

function matchWords(){
    if(wordInput.value===changeWord.innerHTML){
        count_words++;
        mmessage.innerHTML = "Correct!!";
        if(count_words >= 3 && count_words <= 5){
            console.log(levels.medium)
            currentLevel = levels.medium;
            seconds.innerHTML = currentLevel;
        } else if(count_words > 5){
            console.log(levels.hard)
            currentLevel = levels.hard;
            seconds.innerHTML = currentLevel;
        }
        return true;
    }else{
        mmessage.innerHTML = '';
        return false;
    }
}

// for visible of buttons
