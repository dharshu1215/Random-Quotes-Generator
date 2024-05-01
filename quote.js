$(document).ready(function()
{
  // Array of quotes
  var quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it's done. - Nelson Mandela"
  ];
  // Function to get a random quote
  function getRandomQuote() 
  {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  // Display initial quote
  $("#quote-text").text(getRandomQuote());
  // Event listener for the "New Quote" button
  $("#new-quote-btn").on("click", function() 
  {
    $("#quote-text").text(getRandomQuote());
  });
});