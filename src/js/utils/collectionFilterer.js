export default function collectionFilterer(collection, filters, queryFilterFn) {
  let queryFilteredCollection = collection.toSeq();

  const query = filters.get('query', '').trim().toLowerCase();

  if (query) {
    queryFilteredCollection = queryFilteredCollection.filter(
      queryFilterFn(query)
    );
  }

  const paginatedCollection = queryFilteredCollection
    .skip((filters.get('page', 1) - 1) * filters.get('perPage', 10))
    .take(filters.get('perPage'));

  return {
    paginatedCollection,
    queryFilteredCollection,
  };
}
