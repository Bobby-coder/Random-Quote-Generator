const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.name');
const randomQuoteBtn = document.querySelector('button');
const sound = document.querySelector('.sound');
const copy = document.querySelector('.copy');
const tweet = document.querySelector('.twitter');

const generateQuote = () => {
    randomQuoteBtn.innerText = 'Loading...'
    randomQuoteBtn.classList.add('loading')
    fetch('https://api.quotable.io/random').then((res) => res.json()).then((result) => {
        quoteText.innerText = result.content;
        authorText.innerText  = result.author;
        randomQuoteBtn.innerText = 'New Quote'
        randomQuoteBtn.classList.remove('loading')
    })
}

randomQuoteBtn.addEventListener('click', generateQuote)

sound.addEventListener('click', () => {
    let speak = new SpeechSynthesisUtterance(`${quoteText.innerText}`)
    speechSynthesis.speak(speak)
})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(`${quoteText.innerText}`)
})

tweet.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, '_blank')
})
