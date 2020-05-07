var btn = document.getElementById("generate-btn");

btn.addEventListener("click", function getQuote() {
  fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error! status: ${response.status}");
      }
      return response.json();
    })
    .then(function (data) {
      readQuote(data.message);
    });
});

function readQuote(quote) {
  const quoteText = document.querySelector("#quote");
  quoteText.textContent = quote;
}