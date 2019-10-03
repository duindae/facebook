import {map} from 'rxjs/operators';

export function sortBy(collection, mapTo) {
  return collection.sort((item1, item2) => {
    const date1 = mapTo(item1);
    const date2 = mapTo(item2);
    return date1 > date2 ? -1 : date1 < date2 ? 1 : 0;
  });
}

export function sortByOperator(key) {
  return map((list) => {
    return sortBy(list, (item) => {
      return new Date(item[key]);
    });
  });
}
