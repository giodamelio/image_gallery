import Baobab from 'baobab';
import debug from 'debug';

const logger = debug('image_gallery:state');

// Create our data store
const tree = new Baobab({
  images: [],
  isAddingImage: false,
});

// Log changes
tree.on('update', (e) => {
  for (const transaction of e.data.transaction) {
    logger(`${transaction.type} to ${transaction.path}`, transaction.value);
  }
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
