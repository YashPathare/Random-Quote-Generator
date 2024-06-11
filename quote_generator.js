const quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", person: "Walt Disney" },
    { quote: "Your time is limited, don't waste it living someone else's life.", person: "Steve Jobs" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", person: "Eleanor Roosevelt" },
    { quote: "If you look at what you have in life, you'll always have more.", person: "Oprah Winfrey" },
    { quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", person: "James Cameron" }
];
let new_quote=document.querySelector('.quote');
let new_person=document.querySelector('.person');
let btn=document.querySelector('.btn');
btn.addEventListener("click",function(){
    let rnumber= Math.floor(Math.random()*quotes.length);
    new_quote.innerText=quotes[rnumber].quote;
    new_person.innerText=quotes[rnumber].person;
}
)