/**
 * Retorna o valor, em pontos percentuais, da Taxa DI mais atual.
 *
 * @return Retorna o valor, em pontos percentuais, da Taxa DI mais atual.
 * @customfunction
 */
function TAXADI() {
  // Api usada pela b3.com.br para informar a taxa DI do dia
  let query = 'https://www2.cetip.com.br/ConsultarTaxaDi/ConsultarTaxaDICetip.aspx'

  let response = UrlFetchApp.fetch(query, {'muteHttpExceptions': true});
  let json = response.getContentText();
  let data = JSON.parse(json);
  
  return data["taxa"];
}