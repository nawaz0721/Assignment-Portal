var assignmentArray = [
    {
        background: "images/attend.jpg", 
        title: "Attendance Portal",
        date: "23-May-2024",
        description: "Student Attendance Portal using Javascript",
        githubLink: "https://github.com/nawaz0721/assignment-19-Attendance-Portal?authuser=0",
        hostedLink: "https://nawaz0721.github.io/assignment-19-Attendance-Portal/?authuser=0",
    },
    {
        background: "images/todo.jpg", 
        title: "To-Do App",
        date: "21-May-2024",
        description: "To-Do App using Javascript",
        githubLink: "https://github.com/nawaz0721/assignment-18-To-Do-List?authuser=0",
        hostedLink: "https://nawaz0721.github.io/assignment-18-To-Do-List/?authuser=0",
    },
    {
        background: "images/editor.jpg", 
        title: "Text Editor",
        date: "19-May-2024",
        description: "Text Editor using Javascript",
        githubLink: "https://github.com/nawaz0721/assignment-17-Text-Editor?authuser=0",
        hostedLink: "https://nawaz0721.github.io/assignment-17-Text-Editor/?authuser=0",
    },
    {
        background: "images/bulb.jpg", 
        title: "Light Bulb",
        date: "15-May-2024",
        description: "ON/OFF light Bulb using Javascript",
        githubLink: "https://github.com/nawaz0721/assignment-16-light-bulb?authuser=0",
        hostedLink: "https://nawaz0721.github.io/assignment-16-light-bulb/?authuser=0",
    },
    {
        background: "images/counter.jpg", 
        title: "Counter",
        date: "12-May-2024",
        description: "Simple Counter Application using Javascript",
        githubLink: "https://github.com/nawaz0721/Assignment-15-Counter?authuser=0",
        hostedLink: "https://nawaz0721counter.netlify.app/?authuser=0",
    },
    {
        background: "images/finance.jpg", 
        title: "Finance Tracker App",
        date: "09-May-2024",
        description: "Finance Tracker App using Javascript",
        githubLink: "https://github.com/nawaz0721/Assignment-14-Finance-Tracker-App?authuser=0",
        hostedLink: "https://nawaz0721financetackerapp.netlify.app/?authuser=0",
    },
    {
        background: "images/calculator.jpg", 
        title: "Calculator",
        date: "07-May-2024",
        description: "Calculator using Javascript",
        githubLink: "https://github.com/nawaz0721/assigment-13-calculator?authuser=0",
        hostedLink: "https://nawaz0721calculator.netlify.app/?authuser=0",
    },
    {
        background: "images/quick.jpg",
        title: "Quick Stop Game",
        date: "05-May-2024",
        description: "Quick Stop Game using Javascript",
        githubLink: "https://github.com/nawaz0721/assigment-12-game?authuser=0",
        hostedLink: "https://nawaz0721quickstopgame.netlify.app/?authuser=0",
    },
    {
        background: "images/stopwatch.webp",
        title: "Stop Watch",
        date: "04-May-2024",
        description: "Stop Watch using Javascript",
        githubLink: "https://github.com/nawaz0721/assigment-11-Stopwatch?authuser=0",
        hostedLink: "https://nawaz0721stopwatch.netlify.app/?authuser=0",
    },
    {
        background: "images/timer.jpg",
        title: "Countdown Timer",
        date: "03-May-2024",
        description: "Countdown Timer for Eid-ul-Adha using Javascript ",
        githubLink: "https://github.com/nawaz0721/Countdown-Timer?authuser=0",
        hostedLink: "https://nawaz0721countdowntimer.netlify.app/?authuser=0",
    },
    {
        background: "images/clock.jpg",
        title: "Digital Clock",
        date: "30-April-2024",
        description: "Digital Clock using Javascript",
        githubLink: "https://github.com/nawaz0721/digital-clock?authuser=0",
        hostedLink: "https://nawaz0721digitalclock1.netlify.app/?authuser=0",
    },
    {
        background: "images/guess.jpg",
        title: "Guess the Number",
        date: "26-April-2024",
        description: "Guess the number between 1-6",
        githubLink: "https://github.com/nawaz0721/assigment-8-mini-game",
        hostedLink: "https://662c0d3bd830012e3c06e951--grand-pastelito-c1a6cc.netlify.app/",
    },
]

var assignmentList = document.getElementById('allAssignment');

for(var i = 0; i < assignmentArray.length; i++){
    var div = `
    <div class="flip-container">
        <div class="flipper">
            <div class="front" style="background-image: url(${assignmentArray[i].background})">
                <h2>${[i + 1]}</h4>
                <h1 class="text-shadow">${assignmentArray[i].title}</h1>
                <h4>Date: ${assignmentArray[i].date}</h4>
            </div>
            <div class="back">
                <h2>${assignmentArray[i].title}</h2>
                <p>${assignmentArray[i].description}</p>
                <div style="display:flex, flex-wrap: wrap">
                <button><a href="${assignmentArray[i].githubLink}">View Code on Github</a></button>
                <button><a href="${assignmentArray[i].hostedLink}">Hosted link</a></button>
                </div>
            </div>
        </div>
    </div>`;
    
    assignmentList.innerHTML += div;
}


