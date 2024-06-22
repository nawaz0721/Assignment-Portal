var assignmentArray = [
    {
        background: "images/weather\ app.jpeg",
        title: "Weather App",
        date: "22-JUNE-2024",
        description: "Student Attendance Portal using Javascript",
        githubLink: "https://github.com/nawaz0721/Weather-App",
        hostedLink: "https://nawaz0721.github.io/Weather-App/",
    },
    {
        background: "images/E-Commerce-Website.jpg",
        title: "E-Commerce-Website",
        date: "20-JUNE-2024",
        description: "Student Attendance Portal using Javascript",
        githubLink: "https://github.com/nawaz0721/-E-Commerce-Website",
        hostedLink: "https://nawaz0721.github.io/-E-Commerce-Website/",
    },
    {
        background: "images/local.webp",
        title: "Local Stroage",
        date: "05-JUNE-2024",
        description: "Student Attendance Portal using Javascript",
        githubLink: "https://github.com/nawaz0721/local-Storage",
        hostedLink: "https://nawaz0721.github.io/local-Storage/",
    },
    {
        background: "images/cards.avif",
        title: "3D Cards",
        date: "28-May-2024",
        description: "Student Attendance Portal using Javascript",
        githubLink: "https://github.com/nawaz0721/assignment-20-3D-Card",
        hostedLink: "https://nawaz0721.github.io/assignment-20-3D-Card/",
    },
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
            
     <!-- main Atropos container (required), add your custom class here -->
    <div class="atropos my-atropos">
        <!-- scale container (required) -->
        <div class="atropos-scale">
            <!-- rotate container (required) -->
            <div class="atropos-rotate">
                <!-- inner container (required) -->
                <div class="atropos-inner">
                <a  href="${assignmentArray[i].hostedLink}">
                    <div class="card" style="width: 22rem;">
                        <img src="${assignmentArray[i].background}" class="card-img-top" alt="...">
                        <h2 data-atropos-offset="10" class="card-title">${assignmentArray[i].title}</h2>
                    </div>
                </a>    
                </div>
            </div>
        </div>
    </div>`;
    
    assignmentList.innerHTML += div;
}

//<p class="card-text" data-atropos-offset="4">${assignmentArray[i].description}</p>
//<a data-atropos-offset="4" href="${assignmentArray[i].githubLink}" class="btn btn-primary btn-sm">Github Code</a>
//<a data-atropos-offset="4" href="${assignmentArray[i].hostedLink}" class="btn btn-outline-warning btn-sm">Hosting link</a>
// Initialize Atropos effect for each card
document.querySelectorAll('.my-atropos').forEach(atroposEl => {
    Atropos({
        el: atroposEl,
        activeOffset: 70,
        rotateXMax: 20,
        rotateYMax: 20,
        shadow: true,
        shadowOffset: 50,
        shadowScale: .95,
        highlight: true,
    });
});
