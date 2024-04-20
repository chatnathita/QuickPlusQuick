let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let r = document.getElementById("re")
let ans = document.getElementById("answer");
let s = document.getElementById("score");
let es = document.getElementById("endscore");
let h = document.getElementById("highscore");
let startcon = document.getElementById("startcontainer");
let quizcon = document.getElementById("quizcontainer");
let endcon = document.getElementById("resultcontainer");
let timer = document.getElementById("timer");
let sub = document.getElementById("submit");
let operatorpicked = false;
let score = 0;
let highscore = 0;
let time = 60000;

function randomNum(){
    return parseInt((Math.random()*50)+1);
}

function Plus(){
    operatorpicked = true;
    isPlus = true;
    if(isPlus == true){
        plusQuiz();
    }
}

function Minus(){
    operatorpicked = true;
    isPlus = false;
    if(isPlus == false){
        minusQuiz();
    }
}

function Start(){
    if(operatorpicked == true){
    console.log("stared");
    startcon.classList.add("hide");
    quizcon.classList.remove("hide");
    StartTimer()

    }
    else if(operatorpicked == false){
        alert("Pick operator");
    }
}

function plusQuiz() {
    let num1 = randomNum()
    let num2 = randomNum()
    n1.value = num1;
    n2.value = num2;
    n1.innerHTML = n1.value+" +";
    n2.innerHTML = n2.value;
    // r.innerHTML = "= ?";
    s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
}

function minusQuiz(){
    let num1 = randomNum()
    let num2 = randomNum()
    n1.value = num1;
    n2.value = num2;
    n1.innerHTML = n1.value+" -";
    n2.innerHTML = n2.value;
    // r.innerHTML = "= ?";
    s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
}

function Reset(){
    quizcon.classList.remove("hide");
    endcon.classList.add("hide");
    score = 0;
    if(isPlus == true){
        plusQuiz()
    }
    else if(isPlus == false){
        minusQuiz()
    }
    StartTimer()
}

function Home(){
    endcon.classList.add("hide");
    startcon.classList.remove("hide");
    operatorpicked = false;
    score = 0;
}

function Submit(){
    console.log(isPlus);
    if(isPlus == true){
        let trueanswer = n1.value+n2.value;
        if(ans.value == trueanswer){
            console.log("true");
            plusQuiz()
            score++;
            s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
            ans.value = "";
            if(highscore < score){
                highscore = score;
            }
            else if(highscore >= score){
                highscore = highscore;
            }            
        }
        else if(ans.value == ""){
            alert("Enter a Number")
        }
        else{
            ans.value = "";
            plusQuiz()
            console.log("false")
        }
    }
    else if(isPlus == false){
        let trueanswer = n1.value-n2.value;
        if(ans.value == trueanswer){
            console.log("true");
            minusQuiz()
            score++;
            s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
            ans.value = "";
            if(highscore < score){
                highscore = score;
            }
            else if(highscore >= score){
                highscore = highscore;
            }
        }
        else if(ans.value == ""){
            alert("Enter a Number")
        }
        else{
            ans.value = "";
            minusQuiz()
            console.log("false")
        }
        
    }
}

function StartTimer(){
        timer.innerHTML = "";
        let timeIn = setInterval(() => {
    if(time > -100){
        time -= 100;
        timer.innerHTML = "เวลาคงเหลือ&nbsp"+Math.round(time/1000)+"&nbspวินาที";
    }
    else if(time <= -100){
            es.innerHTML = score;
            h.innerHTML = "คะแนนที่ดีที่สุด : "+highscore+" คะแนน";
            ans.value = "";
            quizcon.classList.add("hide");
            endcon.classList.remove("hide");
            console.log("time out")
            time = 60000;
            clearInterval(timeIn);
        }
        },100)
}
    
document.addEventListener("keydown",(e) => {
    if(e.keyCode === 13){
        Submit()
    }
})

