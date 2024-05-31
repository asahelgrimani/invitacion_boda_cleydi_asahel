const inv_list = {
    '105899':['ENSON GRIMANI','CECILIA GRIMANI'],
    '128806':['EDISON CARRASCO','HERMELINDA CARRASCO'],
    '135572':['GERAL ALBORNOZ','ALVARO ALBORNOZ'],
    '145953':['MARIA ATUNCA','LORENZA ATUNCA'],
    '147542':['CHING ATUNCA'],
    '148737':['EMERSON GRIMANI','SARELA GRIMANI','NOÉ GRIMANI'],
    '150293':['GISELA GRIMANI','JEFFREY ALVITES'],
    '152528':['GIANINA GRIMANI','ANGEL VALLE','JESÉ VALLE','ANGELO VALLE'],
    '153975':['LUCIA GRIMANI'],
    '157331':['ZAIDA MALPARTIDA','CARLOS MALPARTIDA']
};

function getQueryVariable() {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == 'id') {
            return pair[1];
        }
    }
}

function print_name_elements(id) {

    const inv_nom_e = document.getElementById("inv-nom");

    inv_nom_e.removeChild(inv_nom_e.firstElementChild)

    for (var i in inv_list[id]) {
        var p_element = document.createElement("p");
        var text_p_element = document.createTextNode(inv_list[id][i]);
    
        p_element.appendChild(text_p_element);
    
        inv_nom_e.appendChild(p_element);
    }
}

const id = getQueryVariable();

if (id in inv_list) {
    print_name_elements(id);
}