var items = [
  {
    id: 4,
    name: "abc",
  },
  {
    id: 10,
    name: "ab2",
  },
  {
    id: 5,
    name: "abc3",
  },
  {
    id: 6,
    name: "abc5",
  },
];

function dynamicSort(property) {
  return function (abc, ab2) {
    return abc[property] < ab2[property]
      ? -1
      : abc[property] > ab2[property]
      ? 1
      : 0;
  };
}

items.sort(dynamicSort("name")).sort(dynamicSort("id"));
console.log(items);
items.sort(dynamicSort("id")).sort(dynamicSort("name"));
console.log(items);
