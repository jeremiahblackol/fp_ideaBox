function captureIdea(title, body) {
  return title && body ? {
    title: title,
    body: body,
  } : false;
}

function storeIdea(idea, dataStore) {
  let localStoredIdeas = dataStore.slice();
  localStoredIdeas.push(idea);
  dataStore = localStoredIdeas;
  return dataStore;
};