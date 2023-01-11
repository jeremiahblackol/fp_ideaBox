function captureIdea(title, body) {
  return title && body ? {
    title: title,
    body: body,
    id: Date.now(),
  } : false;
};

// function getIdea(id, dataStore) {
//   return 
// };
function deleteIdea(id, dataStore) {
  let ideaToDelete = dataStore.find((idea) => idea.id == id);
  let indexToDelete = dataStore.indexOf(ideaToDelete)
  dataStore.splice(indexToDelete, 1)
  return dataStore
};

function favoriteIdea(id, dataStore) {
  let ideaToFavorite = dataStore.find((idea) => idea.id == id);
  if (ideaToFavorite.favorite) {
    ideaToFavorite.favorite = false;
  } else {
    ideaToFavorite.favorite = true;
  }
  console.log(ideaToFavorite)
  return dataStore
};
    