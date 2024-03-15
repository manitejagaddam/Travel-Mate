let people = [
    "Ramesh",
    "Suresh",
    "Ganesh",
    "Somesh",
    "Geeta",
    "Sewtha",
    "Rani",
];

let n = Math.floor(Math.random() * people.length);
const form = document.querySelector(".Form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let randomIndex = Math.floor(Math.random() * people.length);
    console.log(people[0])

    document.querySelector(".container").innerHTML = "";
    
    let name = document.createElement('div');
    name.innerHTML = `
        <div class="border border-dark box1 d-flex-row justify content-center">
            <h2 box-h1>Matched Members</h2>
            <div class="box2">
                <div class="person-1 border border-dark my-3">
                    <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/user-female--v2.png" alt="user-female--v2"/>
                    <span class="name"><h3>${people[randomIndex]}</h3></span>
                    <button class="btn btn-primary"><a href="/chat/chat.html"> Chat </a></button>
                </div>
                <div class="person-2 border border-dark my-3">
                    <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/user-male--v2.png" alt="user-male--v2"/>
                    <span class="name"><h3>${people[randomIndex - 1]}</h3></span>
                    <button class="btn btn-primary"><a href="/chat/chat.html">Chat</a></button>
                </div>
            </div>
        </div>`;

    // name.querySelector('.name').textContent = people[randomIndex];
    document.body.appendChild(name);
});