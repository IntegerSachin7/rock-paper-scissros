let userscore = 0; // initial score of user
let compscore = 0; // initial score of computer

const choices = document.querySelectorAll('.choice'); // selecting all the choices
const msgp = document.getElementById('msg'); // selecting the message paragraph

const gencompchoice = () => {
    const options = ['rock', 'paper', 'scissors']; // choices for computer
    const randomidx = Math.floor(Math.random() * 3); // generating random number
    return options[randomidx]; // returning the choice of computer
};

const drawgame = () => {
    console.log('draw');
    msgp.style.color = 'yellow';
    msgp.innerText = 'It\'s a draw!';
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        msgp.innerText = 'You win!';
        msgp.style.color = 'green';
        document.getElementById('user-score').innerText = userscore;
    } else {
        compscore++;
        msgp.innerText = 'Computer wins!';
        msgp.style.color = 'red';
        document.getElementById('comp-score').innerText = compscore;
    }
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice(); // getting the choice of computer
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === 'rock') {
            userwin = compchoice === 'paper' ? false : true;
        } else if (userchoice === 'paper') {
            userwin = compchoice === 'scissors' ? false : true;
        } else {
            userwin = compchoice === 'rock' ? false : true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id'); // getting the id of the choice
        playgame(userchoice);
    });
});
