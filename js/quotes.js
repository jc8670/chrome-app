const quotes = [
{
    quote:"Life is what happens when you're busy making plans.",
    author: "John Lennon",
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
},
{
    quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    author: "Steve Jobs",
},
{
    quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
},
{
    quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
},
{
    quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
},
{
    quote:"Whoever is happy will make others happy too.",
    author: "Anne Frank",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

