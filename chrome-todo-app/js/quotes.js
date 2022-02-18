const quotes = [
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "@ Maya Angelou",
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: "@ Helen Keller",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "@ Lilly Pulitzer",
  },
  {
    quote: "All you need in this life is ignorance and confidence; then success is sure.",
    author: "@ Mark Twain",
  },
  {
    quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "@ Maxime Lagacé",
  },
  {
    quote: "Stop chasing the money and start chasing the passion.",
    author: "@ Tony Hsieh",
  },
  {
    quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "@ Bruce Lee",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "@ Theodore Roosevelt",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "@ Walt Disney",
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "@ Lilly Pulitzer",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;