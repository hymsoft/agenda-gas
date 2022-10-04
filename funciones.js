const HOJA = SpreadsheetApp.openById("17RgtnSL8Jh6mSBY4ENV5y9fnfmX__3ybwtpPTGpeGwU").getActiveSheet();

function doGet(datos) {
  //insertarContacto(datos.parameter.nombre,datos.parameter.correo);
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("Agenda Google Apps Script");
}

function doPost(datos) {
  //insertarContacto(datos.parameter.nombre,datos.parameter.correo);
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("Agenda Google Apps Script");
}

function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
  return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellido, correo, telefono) {
  HOJA.appendRow([nombre, apellido, correo, telefono]);
}