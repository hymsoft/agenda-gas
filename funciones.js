const HOJA = SpreadsheetApp.openById("17RgtnSL8Jh6mSBY4ENV5y9fnfmX__3ybwtpPTGpeGwU").getActiveSheet();
const CARPETA_DRIVE = DriveApp.getFolderById("1sq_Dpz2o7ukHkVcWHX-kNxy3BPmSU1jD");
const CABECERA_URL_IMAGEN_DRIVE = "https://drive.google.com/uc?export=view&id=";

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

function obtenerDatos() {
  // obtiene todo los datos de una hoja
  return HOJA.getDataRange().getValues();
}

function insertarContacto(contacto, imagen) {
  if (imagen) contacto.imagen = guardarImagen(imagen);
  HOJA.appendRow([contacto.nombre, contacto.apellido, contacto.correo, contacto.telefono, contacto.imagen]);
}

function modificarContacto(contacto, imagen) {
  let celdas = HOJA.getRange(contacto.fila, 1, 1, HOJA.getLastColumn());
  if (imagen) contacto.imagen = guardarImagen(imagen);

  celdas.setValues([[contacto.nombre, contacto.apellido, contacto.correo, contacto.telefono, contacto.imagen]]);
}

function guardarImagen(imagen) {
  let blob = Utilities.newBlob(imagen.datos, imagen.tipo, imagen.nombre);
  let archivo = CARPETA_DRIVE.createFile(blob);
  return CABECERA_URL_IMAGEN_DRIVE + archivo.getId();

}

function eliminarContacto(nFila) {
  HOJA.deleteRow(nFila);
}

function importarContactos(){
  let url = "https://randomuser.me/api/?results=5&nat=es&inc=name,email,phone,picture";
  let respuesta = UrlFetchApp.fetch(url).getContentText();
  let datos = JSON.parse(respuesta);
  datos.results.forEach(contacto => insertarContactoImportado(contacto));
}

function insertarContactoImportado(contacto){
  let contactoImportado = {
    nombre: contacto.name.first,
    apellido: contacto.name.last,
    correo: contacto.email,
    telefono: contacto.phone,
    imagen: contacto.picture.large
  }
  insertarContacto(contactoImportado);
}

