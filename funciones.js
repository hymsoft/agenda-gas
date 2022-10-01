function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("Agenda Google Apps Script");
}

function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
