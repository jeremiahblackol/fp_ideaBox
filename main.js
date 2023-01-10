let wholeBody = document.querySelector("body");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#idea-body");
var submitButton = document.querySelector("button");
let errorMessageArea = document.querySelector("#form-error-message");
let cardArea = document.querySelector("#idea-cards");
var storedIdeas = [];

submitButton.addEventListener("click", function(event) {
    var checkForIdea = captureIdea(titleInput.value, bodyInput.value);
    return checkForIdea ? renderIdeaCards(createIdeaCards(storeIdea(checkForIdea, storedIdeas))): tellUserAddInfo(titleInput.value, bodyInput.value);

  function tellUserAddInfo(title, body) {
    if (!title) {
      errorMessageArea.innerText = "Please give your idea a title!";
    } else if (!body) {
      errorMessageArea.innerText = "Please give your idea a body!";
    };
  };
  
  function storeIdea(idea, dataStore) {
    let localStoredIdeas = dataStore.slice();
    localStoredIdeas.push(idea);
    storedIdeas = localStoredIdeas;
    clearAfterStorage();
    return storedIdeas;
  };

  function clearAfterStorage() {
    errorMessageArea.innerText = "";
    titleInput.value = "";
    bodyInput.value = "";
  };

  function createIdeaCards(allCardsInfo) {
    return allCardsInfo.map((card) => {
      card = `<div class="card-styles"><h3>${card.title}</h3><p>${card.body}</p></div>`
      return card;
    });
  };

  function renderIdeaCards(cardsToDisplay) {
    cardArea.innerHTML = "";
    cardsToDisplay.forEach((card) => cardArea.innerHTML += card);
  };
});