import Bluebird from 'bluebird';

export default function listImages(database) {
  return new Bluebird((resolve, reject) => {
    database
      .find({})
      .sort({
        createdAt: -1,
      })
      .exec((err, images) => {
        if (err) {
          return reject(err);
        }

        return resolve(images);
      });
  });
}
