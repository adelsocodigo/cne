let votes = {
    option1: 0,
    option2: 0,
    option3: 0
};

let singleVotes = {
    option1: 0,
    option2: 0,
    option3: 0
};

let fractionalVote2 = 0;

function vote(option) {
    if (option === 'option1') {
        votes.option1 += 2;  // Cada voto para la opción 1 cuenta como 2 votos
        singleVotes.option1 += 1;  // También cuenta como 1 voto en la categoría de valor 1
    } else if (option === 'option2') {
        fractionalVote2 += 1 / 3;  // Cada voto para la opción 2 cuenta como 1/3 de voto
        singleVotes.option2 += 1;  // También cuenta como 1 voto en la categoría de valor 1
        if (fractionalVote2 >= 1) {
            let wholeVotes = Math.floor(fractionalVote2);
            votes.option2 += wholeVotes;
            fractionalVote2 -= wholeVotes;
        }
    } else if (option === 'option3') {
        votes.option3 += 1;  // Cada voto para la opción 3 cuenta como 1 voto
        singleVotes.option3 += 1;  // También cuenta como 1 voto en la categoría de valor 1
    }
    updateResults();
}

function updateResults() {
    document.getElementById('count1').innerText = votes.option1;
    document.getElementById('count2').innerText = votes.option2;
    document.getElementById('count3').innerText = votes.option3;
    document.getElementById('singleCount1').innerText = singleVotes.option1;
    document.getElementById('singleCount2').innerText = singleVotes.option2;
    document.getElementById('singleCount3').innerText = singleVotes.option3;
}
