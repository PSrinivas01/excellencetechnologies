function getEventNumber() {
  var arr = [1, 2, 3, 4, 5, 6];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      document.write(arr[i] + "<br />");
    }
  }
}

getEvenNumbers();
