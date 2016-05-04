export function addImage(tree, image) {
  fetch('/api/images', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(image),
  })
  .then((res) => res.json())
  .then((body) => {
    tree.shift('images', body);
  });
}

export function showAddImageModel(tree, data) {
  tree.set('isAddingImage', data);
}
