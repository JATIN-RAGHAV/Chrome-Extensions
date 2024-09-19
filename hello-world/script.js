
const byLine = document.getElementById('byLine');
const qutoeEle = document.getElementById('quote');
fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        qutoeEle.textContent = data.quote;
        byLine.textContent = '-'+ data.author;
    })

