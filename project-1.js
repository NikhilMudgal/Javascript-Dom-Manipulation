let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
    quote: `"The greatest glory in living lies not in never falling, 
    but in rising every time we fall."`,
    person: ` Nelson Mandela`
    },
    {
      quote: `"The way to get started is to quit talking and begin doing."`,
      person: ` Walt Disney`
    },
    {
      quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
      person: ` Steve Jobs`
    }                                        
];

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})