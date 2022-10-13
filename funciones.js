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
  // obtiene todo los datos de una hoja
  return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellido, correo, telefono,fotografia) {
  HOJA.appendRow([nombre, apellido, correo, telefono,fotografia]);
}

function eliminarContacto(nFila){
  HOJA.deleteRow(nFila);
}

function modificarContacto(nFila,datos){
  let celdas  = HOJA.getRange(nFila, 1, 1, HOJA.getLastColumn()-1 );
  celdas.setValues([[datos.nombre,datos.apellido,datos.correo,datos.telefono]]);  
}

function importarContactos(){
  let url = "https://randomuser.me/api/?results=5&nat=es&inc=name,email,phone,picture";
  let respuesta = UrlFetchApp.fetch(url).getContentText();
  let datos = JSON.parse(respuesta);
  datos.results.forEach(contacto => insertarContactoImportado(contacto));
}

function insertarContactoImportado(contacto){
  let nombre = contacto.name.first;
  let apellido = contacto.name.last;
  let correo = contacto.email;
  let telefono = contacto.phone;
  let fotografia = contacto.picture.large;

  insertarContacto(nombre,apellido,correo,telefono,fotografia);
}



