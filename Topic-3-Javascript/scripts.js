function Table(matrixOfData) {
  const table = document.createElement('table');
  table.setAttribute("border","2")
  table.setAttribute("bordercolor","green")
  matrixOfData.forEach(row => {
    let newRow = table.insertRow();
    row.forEach(cell => {
      let newCell = newRow.insertCell();
      newCell.appendChild(document.createTextNode(cell));
    });
  });
  return table;
}
 const dataTable = [['D', 'e', 's', 'p', 'a', 'c', 'i', 't','o'], [1,2,3,4,5,6,7,8,9], ['D', 'e', 's', 'p', 'a', 'c', 'i', 't','o']];
document.querySelector('body').appendChild(Table(dataTable));

