//@OnlyCurrentDoc

function onOpen() {
 SpreadsheetApp
   .getUi()
   .createMenu("Lace")
   .addItem("Lace page", "showLaceSidebar")
   .addToUi();
}

function showLaceSidebar() {
 var widget = HtmlService.createHtmlOutputFromFile("Sidebar.html");
 SpreadsheetApp.getUi().showSidebar(widget);
}

function getCurrentCell() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var cellRange = sheet.getActiveRange();
  const numRows = cellRange.getNumRows();
  const numCols = cellRange.getNumColumns();

  if (numCols < 2) {
    return "please select two colums";
  }

  values = [];
  for (let j = 1; j <= numRows; j++) {
    
    const amount = cellRange.getCell(j, 1);
    const address = cellRange.getCell(j, 2);
    values.push([amount.getValue(), address.getValue()]);
  }

  return values;
}

function setTransactionID(row, txID) {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var cellRange = sheet.getActiveRange();
  const numRows = cellRange.getNumRows();
  const numCols = cellRange.getNumColumns();

  if (numCols < 3) {
    return "please select two colums";
  }

  if (numRows < row) {
    return "row out of band";
  }

  //explorer = "https://preprod.cardanoscan.io/transaction/";
  //explorer = "https://preprod.cexplorer.io/tx/";

  //explorer = "https://cardanoscan.io/transaction/";

  explorer = ""; // just drop the TxID

  cellRange.getCell(row, 3).setValue(explorer + txID);
}

function setTxCol(txID) {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var cellRange = sheet.getActiveRange();
  const numRows = cellRange.getNumRows();
  const numCols = cellRange.getNumColumns();

  if (numCols < 3) {
    return;
  }

  //explorer = "https://preprod.cardanoscan.io/transaction/";
  explorer = "https://preprod.cexplorer.io/tx/";

  for (let i = 1; i <= numRows; i++) {
    cellRange.getCell(i, 3).setValue(explorer + txID);
  }
}

//getCurrentCell();
