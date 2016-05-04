import Baobab from 'baobab';

// Create our data store
const tree = new Baobab({
  images: [],
});

// Expose store for debugging
window.tree = tree;

// Download initial data
fetch('/api/images')
  .then((res) => res.json())
  .then((body) => {
    tree.set('images', body);
  });

export default tree;
