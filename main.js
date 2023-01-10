let wholeBody = document.querySelector("body");
// does not make sense for this to be out here...might need to be a CSS class that i can add or remove
// how can all of the function be enclosed???
var storedIdeas = [];


wholeBody.addEventListener("click", function(event) {
  var titleInput = document.querySelector("#title");
  var bodyInput = document.querySelector("#idea-body");
  var submitButton = document.querySelector("button");
  let errorMessageArea = document.querySelector("#form-error-message");
  let cardArea = document.querySelector("#idea-cards")
  
  if (event.target === submitButton) {
    var checkForIdea = captureIdea(titleInput.value, bodyInput.value);
    return checkForIdea ? renderIdeaCards(createIdeaCards(storeIdea(checkForIdea, storedIdeas))): tellUserAddInfo(titleInput.value, bodyInput.value);
  }
  
  function tellUserAddInfo(title, body) {
    if (!title) {
      errorMessageArea.innerText = "Please give your idea a title!";
    } else if (!body) {
      errorMessageArea.innerText = "Please give your idea a body!";
    } 
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
      card = `
      <div class="card-styles">
         <h3>${card.title}</h3>
         <p>${card.body}</p>
       </div>`
       return card;
    });
  };

  function renderIdeaCards(cardsToDisplay) {
    cardArea.innerHTML = "";
    cardsToDisplay.forEach((card) => cardArea.innerHTML += card);
  };


  // if (titleInput && bodyInput) {
  //   checkForIdea = captureIdea(titleInput.value, bodyInput.value)
  //   sendThisData(checkForIdea) 
  // }


  // function sendThisData(anyFunctionsReturnValue) {
  //   if (typeof anyFunctionsReturnValue === Object) {
  //     generateCards(anyFunctionsReturnValue)
  //     return storeIdeas(anyFunctionsReturnValue) // --> this should return an array, with anyFunctionsReturnValue appended
  //     // to the end of it
  //   }
  // }

  // function generateCards(card) {
  //   var cardSection = document.querySelector("#idea-cards");
  //   // dont forget to add the classes below to CSS
  //   cardSection += `
  //   <div class="card-styles">
  //     <h3>${ideaDetails.title}</h3>
  //     <p>${ideaDetails.body}</p>
  //   </div>
  //   `;

  // }
});