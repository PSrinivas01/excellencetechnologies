function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if (!object[item]) object[item] = 0;
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }

  return result;
}

console.log(find_duplicate_in_array([0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]));
