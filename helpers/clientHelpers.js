export const collectionModifier = (collection) => {
  const modifiedCollection = [];
  for (const key in collection) {
    if (collection[key]) {
      modifiedCollection.push(key);
    }
  }
  return modifiedCollection;
};
