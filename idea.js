function captureIdea(title, body) {
  return title && body ? {
    title: title,
    body: body,
    id: Date.now(),
  } : false;
}

function deleteIdea(id, dataStore) {
    let ideaToDelete = dataStore.find((idea) => idea.id == id);
    let indexToDelete = dataStore.indexOf(ideaToDelete)
    dataStore.splice(indexToDelete, 1)
    return dataStore
  }
    