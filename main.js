let wholeBody = document.querySelector("body");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#idea-body");
var submitButton = document.querySelector("#submit-button");
let errorMessageArea = document.querySelector("#form-error-message");
let filterFavoriteButton = document.querySelector("#filter-favorite-ideas");
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
});

function createIdeaCards(allCardsInfo) {
  return allCardsInfo.map((card) => {
    let isFavorite = card.favorite ? "❤️‍🔥" : "❤️"
    card = `
    <div class="card-styles">
      <div class="button-container">
        <button id=${card.id} class="favorite-and-delete-styles favorite-button">${isFavorite}</button>
        <button id=${card.id} class="favorite-and-delete-styles delete-button">🗑</button>
      </div>
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    </div>`
    return card;
  });
};

filterFavoriteButton.addEventListener("click", function() {
  if (filterFavoriteButton.innerText === "Filter Favorites") {
    console.log("hell0")
    renderIdeaCards(createIdeaCards(filterFavorites(storedIdeas)));
    filterFavoriteButton.innerText = "Show All Ideas"
  } else {
    console.log("g00dbye")
    renderIdeaCards(createIdeaCards(storedIdeas))
    filterFavoriteButton.innerText = "Filter Favorites"
  }
});



cardArea.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-button")) {
    renderIdeaCards(createIdeaCards(deleteIdea(event.target.id, storedIdeas)))
  }

  if (event.target.classList.contains("favorite-button")) {
    renderIdeaCards(createIdeaCards(favoriteIdea(event.target.id, storedIdeas)))
  }
});

function renderIdeaCards(cardsToDisplay) {
  cardArea.innerHTML = "";
  cardsToDisplay.forEach((card) => cardArea.innerHTML += card);
};



//////////////HEY FOOO, GET THE STYLING DONE TOMORROW MORNING!!!!!!!/////////////////