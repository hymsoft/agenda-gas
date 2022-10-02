function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("Agenda Google Apps Script");
}

function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
  let hoja = SpreadsheetApp.openById(
    "17RgtnSL8Jh6mSBY4ENV5y9fnfmX__3ybwtpPTGpeGwU"
  ).getActiveSheet();
  let datos = hoja.getDataRange().getValues();
  return datos;
}
