function captureIdea(title, body) {
  return title && body ? {
    title: title,
    body: body,
  } : false;
}

