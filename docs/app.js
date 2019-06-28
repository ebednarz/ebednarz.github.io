fetch('https://bednarz-bike.herokuapp.com/api')
  .then(response => response.json())
  .then(({ distance, weight }) => {
    const { from } = Array;
    const [rowOne, rowTwo] = from(document.getElementsByTagName('TR'));

    function replaceIn(value, row) {
      const [td] = from(row.getElementsByTagName('TD'));

      td.replaceChild(document.createTextNode(value), td.lastChild);
    }

    replaceIn(distance, rowOne)
    replaceIn(weight, rowTwo)
  });
