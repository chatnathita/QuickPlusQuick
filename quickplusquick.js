class Node{
    constructor(elem){
        this.element = elem;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.lenght = 0;
    }
    push(value){
        const newNode = new Node(value);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else{
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.lenght++;
        return this;
    }
    shift(){
        if(this.lenght == 0){
            return undefined;
        }
        let curentNode = this.firstNode;
        this.firstNode = this.firstNode.next;
        curentNode.next = null;
        this.lenght--;
        if(this.lenght === 0){
            this.lastNode = null;
        }
        return curentNode;
    } 
}

class Queue{
    constructor(){
        this.mylist = [];
        this.mylist2 = [];
        this.mylist3 = [];
        this.mylist4 = [];
    }
    isEmpty(){
        return this.mylist.length == 0;
    }
    enQueue(value){
        this.mylist.push(value);
    }
    enQueue2(value){
        this.mylist2.push(value);
    }
    enQueue3(value){
        this.mylist3.push(value);
    }
    enQueue4(value){
        this.mylist4.push(value);
    }
    deQueue(){
        if(this.isEmpty()){
            return "";
        }
        else{
            return this.mylist.shift(),this.mylist2.shift(),this.mylist3.shift(),this.mylist4.shift(); 
                    
        }
    }
    display(){
        if(this.mylist.length == 0)
        {
            norec.innerHTML = "ไม่มีสถิติการเล่น";
        }
        else if(this.mylist.length <= 10){
            norec.classList.add("hide")
            bm.classList.remove("hide")
            nl.innerHTML = "";
            sl.innerHTML = "";
            tl.innerHTML = "";
            dl.innerHTML = "";
            bt.innerHTML = "คะแนนที่ดีที่สุด = "+highscore+" คะแนน"
            for(let i = 0;i<this.mylist.length;i++){
            nl.innerHTML = nl.innerHTML+this.mylist[i]+"<br>"+"<br>";
            sl.innerHTML = sl.innerHTML+" "+this.mylist2[i]+"<br>"+"<br>";
            dl.innerHTML = dl.innerHTML+" "+this.mylist3[i]+"<br>"+"<br>";
            tl.innerHTML = tl.innerHTML+" "+this.mylist4[i]+"นาที"+"<br>"+"<br>";
            }
        }
        else{
            myQueue.deQueue();
            myQueue.display();
        }
    }
}

//-------------main-------------------

let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let ans = document.getElementById("answer");
let tn = document.getElementById("timein");
let s = document.getElementById("score");
let es = document.getElementById("endscore");
let h = document.getElementById("highscore");
let timer = document.getElementById("timer");
let sub = document.getElementById("submit");
let plusb = document.getElementById("plusbtn");
let minusb = document.getElementById("minusbtn");
let ez = document.getElementById("eazybtn");
let nr = document.getElementById("normalbtn");
let hr = document.getElementById("hardbtn");
let bm = document.getElementById("boardmain");
let m = document.getElementById("main");
let nl = document.getElementById("numlable");
let sl = document.getElementById("scorelable");
let dl = document.getElementById("difflable");
let tl = document.getElementById("timelable");
let bt = document.getElementById("besttitle");
let norec = document.getElementById("norecord");
let startcon = document.getElementById("startcontainer");
let quizcon = document.getElementById("quizcontainer");
let endcon = document.getElementById("resultcontainer");
let boardcon = document.getElementById("scoreboardconainer");
let myQueue = new Queue();
let operatorpicked = false;
let score = 0;
let highscore = 0;
let difflevel = 50;
let time = 60000;
let numd = 1;
let difflable = "ปกติ";

//  functionบวก
function Plus(){
    plusb.classList.remove("unselected");
    minusb.classList.remove("unselected");    
    plusb.classList.add("selected");
    minusb.classList.remove("selected");   
    operatorpicked = true;
    isPlus = true;
}
//functionลบ
function Minus(){
    plusb.classList.remove("unselected");
    minusb.classList.remove("unselected");    
    plusb.classList.remove("selected");
    minusb.classList.add("selected");   
    operatorpicked = true;
    isPlus = false;
}
//เกมบวก
function plusQuiz() {
    let num1 = randomNum()
    let num2 = randomNum()
    n1.value = num1;
    n2.value = num2;
    n1.innerHTML = n1.value+" +";
    n2.innerHTML = n2.value;
    s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
}
//เกมลบ
function minusQuiz(){
    let num1 = randomNum()
    let num2 = randomNum()
    n1.value = num1;
    n2.value = num2;
    n1.innerHTML = n1.value+" -";
    n2.innerHTML = n2.value;
    s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
}
//ระดับง่าย
function easy(){
    difflevel = 10;
    difflable = "ง่าย";
    ez.classList.add("selected");
    nr.classList.remove("selected");
    hr.classList.remove("selected");
}
//ระดับปกติ
function normal(){
    difflevel = 50;
    difflable = "ปกติ";
    ez.classList.remove("selected");
    nr.classList.add("selected");
    hr.classList.remove("selected");
}
//ระดับยาก
function hard(){
    difflevel = 100;
    difflable = "ยาก";
    ez.classList.remove("selected");
    nr.classList.remove("selected");
    hr.classList.add("selected");
}
//สุ่มเลข
function randomNum(){
    return parseInt((Math.random()*difflevel)+1);
}
//เริ่มเกม
function Start(){
    plusb.classList.remove("selected");
    minusb.classList.remove("selected"); 
    if(operatorpicked == true){
        if(tn.value == ""){
            time = 60000;
            tn.value = 1;
        }
        else{
            time = 60000*tn.value;
        }
        if(isPlus == true){
            plusQuiz();
        }
        if(isPlus == false){
            minusQuiz();
        }
    startcon.classList.add("hide");
    quizcon.classList.remove("hide");
    StartTimer()
    }
    else if(operatorpicked == false){
        plusb.classList.add("unselected");
        minusb.classList.add("unselected");
    }
}
//ตอบ
function Submit(){
    if(isPlus == true){
        let trueanswer = n1.value+n2.value;
        if(ans.value == trueanswer){
            plusQuiz()
            score++;
            s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
            ans.value = "";
            ans.classList.remove("unselected")
            if(highscore < score){
                highscore = score;
            }
            else if(highscore >= score){
                highscore = highscore;
            }            
        }
        else if(ans.value == ""){
            ans.classList.add("unselected")
        }
        else{
            ans.value = "";
            ans.classList.remove("unselected")
            plusQuiz()
        }
    }
    else if(isPlus == false){
        let trueanswer = n1.value-n2.value;
        if(ans.value == trueanswer){
            minusQuiz()
            score++;
            s.innerHTML = "คะแนนที่ได้ : "+score+" คะแนน";
            ans.value = "";
            ans.classList.remove("unselected")
            if(highscore < score){
                highscore = score;
            }
            else if(highscore >= score){
                highscore = highscore;
            }
        }
        else if(ans.value == ""){
            ans.classList.add("unselected")
        }
        else{
            ans.value = "";
            ans.classList.remove("unselected")
            minusQuiz()
        }
    }
}
//เล่นอีกครั้ง
function Reset(){
    quizcon.classList.remove("hide");
    endcon.classList.add("hide");
    score = 0;
    time = 60000*tn.value;
    if(isPlus == true){
        plusQuiz()
    }
    else if(isPlus == false){
        minusQuiz()
    }
    StartTimer()
}
//หน้าหลัก
function Home(){
    endcon.classList.add("hide");
    boardcon.classList.add("hide");
    startcon.classList.remove("hide");
    operatorpicked = false;
    score = 0;
}
//ดูสถิติ
function displayRecord(){
    startcon.classList.add("hide");
    boardcon.classList.remove("hide");
    myQueue.display();
}
//เริ่มเวลา
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
            myQueue.enQueue(numd);
            myQueue.enQueue2(score);
            myQueue.enQueue3(difflable);
            myQueue.enQueue4(tn.value);
            ans.value = "";
            quizcon.classList.add("hide");
            endcon.classList.remove("hide");
            time = 60000;
            numd++;
            clearInterval(timeIn);
        }
        },100)
}
    
document.addEventListener("keydown",(e) => {
    if(e.keyCode === 13){
        Submit()
    }
})

