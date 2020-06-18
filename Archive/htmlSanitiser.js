/**
 * This is a simple HTML sanitiser. 
 * The script is to pre-process user input and prevevent simple XSS attack
 * All user input should be pre-processed before adding to the database
 * */
var escapeHtml = function (str) {
    if (!str) return '';
    // sanitise & mark
    str = str.replace(/&/g, '&amp;');
    // sanitise < > mark
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    // sanitise quotation mark
    str = str.replace(/"/g, '&quto;');
    str = str.replace(/'/g, '&#39;');
    // sanitise spaces to single space
    str = str.replace(/ /g,'&#32;');
    return str
  }