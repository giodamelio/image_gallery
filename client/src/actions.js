export function addImage(tree, image) {
  tree.push('images', image);
}

export function showAddImageModel(tree, data) {
  tree.set('isAddingImage', data);
}
