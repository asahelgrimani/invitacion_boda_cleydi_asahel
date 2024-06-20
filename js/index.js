const inv_list = {
    '105899':['ENSON GRIMANI','CECILIA GRIMANI'],
    '128806':['EDISON CARRASCO','HERMELINDA CARRASCO'],
    '135572':['GERAL ALBORNOZ','ALVARO ALBORNOZ'],
    '145953':['MARIA ATUNCA','LORENZA ATUNCA'],
    '147542':['CHING ATUNCA'],
    '148737':['EMERSON GRIMANI','SARELA GRIMANI','NOÉ GRIMANI'],
    '150293':['GISELA GRIMANI','JEFFREY ALVITES'],
    '152528':['GIANINA GRIMANI','JESÉ VALLE GRIMANI','ANGELO VALLE GRIMANI','ANGEL VALLE'],
    '153975':['LUCIA GRIMANI'],
    '157331':['ZAIDA MALPARTIDA','CARLOS MALPARTIDA'],
    '159178':['MANUEL ROMAN','EVA ROMAN'],
    '171037':['LISBET PEREDA','CESAR PEREDA','BLANCA PEREDA'],
    '179415':['VERONICA ZAMBRANO'],
    '182361':['ALVARO MORALES','PATRICIA MORALES','BELTRÁN MORALES','ALLISON MORALES'],
    '188770':['DYLAN ESPINOZA','JESSICA ESPINOZA','VALERIA ESPINOZA'],
    '195435':['FRANCISCO CORONADO','BLANCA CORONADO'],
    '195586':['JOSUE CORONADO'],
    '197865':['WILFREDO TERAN','SARAI TERAN'],
    '202328':['JOSÉ TOLENTINO','KAREN TOLENTINO'],
    '213503':['LISANDRO SOTO'],
    '219868':['BEATRIZ PINTADO'],
    '222421':['DAMARIS PINTADO'],
    '224768':['JESÚS PINEDO'],
    '225805':['MIGUEL TIRADO'],
    '249223':['DAVID OBANDO'],
    '259686':['ELIHÚ PINTADO'],
    '267348':['JOEL HERNÁNDEZ'],
    '267833':['HECTOR HERNÁNDEZ','MILAGROS HERNÁNDEZ','LUANA HERNÁNDEZ','VALERIA BACA'],
    '274433':['PEDRO OBISPO','MARTA OBISPO'],
    '278219':['MOISES MONTOYA','ROSIMAR MONTOYA'],
    '296141':['ROCIO ORTIZ'],
    '301888':['MISAEL MONTOYA'],
    '302386':['MARCELO ATAUQUE','ROCIO ATAUQUE','JOSIAS ATAUQUE'],
    '305841':['TOMAS AGUILAR','MARIA AGUILAR'],
    '327337':['HERIBERTO AGUILAR','VERONICA LAZARO','HADY AGUILAR'],
    '338873':['MAURA AGUILAR','MARCELINO','SAMIR AGUILAR'],
    '355997':['NANCY AGUILAR','FRANK AGUILAR'],
    '360724':['ESPERANZA AGUILAR','RENE SORIA','CIELO SORIA'],
    '377850':['CESAR AGUILAR','MELINA AGUILAR','ELIOT','KATRINA'],
    '406363':['WILDER AGUILAR'],
    '451151':['LUCIA AGUILAR'],
    '464963':['TOMAS AGUILAR','GLORIA AGUILAR'],
    '468287':['MARINO','JOSELINE'],
    '474780':['LUIS'],
    '477592':['ERIK AGUILAR'],
    '488525':['VICENTE','VICTORIA','ROGER','MYRA','KELLY'],
    '519116':['MARUJA ','ELMER'],
    '522889':['MAURO ','ELENA'],
    '527474':['SHANTAL LOAYZA','AURORA LOAYZA'],
    '531073':['GLADIS SANTOS','ERIKA SANTOS'],
    '536216':['DAVID SANTOS','MARIBEL SANTOS'],
    '537848':['MARILU MEGO'],
    '539983':['MONICA FLORES'],
    '541741':['MARIA MATEO','SANTIAGO MATEO','SARITA MATEO'],
    '545248':['FELIPE CISNEROS','TANIA CISNEROS'],
    '548698':['KATHERINE CHUMBE'],
    '549788':['JOSE RUIZ'],
    '551951':['YESSENIA BLASS'],
    '552640':['FABIO CUENTAS','IDALIA CUENTAS'],
    '564872':['SEGUNDO SANCHEZ','LISSET SANCHEZ','YAIR SANCHEZ'],
    '566176':['RAQUEL CARRILLO','ESPOSO','AZUL CARRILLO'],
    '568121':['FRANCIS DURAN','ABIGAIL DURAN'],
    '571571':['BRUNO ENCISO','ESPOSA'],
    '574949':['EMILY'],
    '585689':['MILAGROS'],
    '600551':['SUJEY'],
    '601403':['GLENDA HUAMANI','JUAN CARLOS HUAMANI'],
    '601746':['CINTHYA MIRANDA','MIGUEL MIRANDA'],
    '606503':['JASMINE MIPSI'],
    '607015':['MIGUEL PORLES','KATHY PORLES'],
    '621098':['MARISOL','TARSIS'],
    '623116':['RINA','MATIAS'],
    '624669':['SUSAN','ESPOSO'],
    '639281':['EDGAR'],
    '672763':['YELVI CUENTAS','LISBETH CUENTAS'],
    '326854':['JULIO RODRIGUEZ','SANDRA RODRIGUEZ']
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

document.getElementById('btn-direc-reg-1').addEventListener('click', function() {
    window.open('https://maps.app.goo.gl/ukmX7KutZb9aRnHz8');
});

document.getElementById('btn-direc-reg-2').addEventListener('click', function() {
    window.open('https://maps.app.goo.gl/188xL7gtbBuKZtzA7');
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('btn-direc').addEventListener('click', function() {
        window.open('https://maps.app.goo.gl/KtbnXfRcDnNfBNPb7');
    });
    
    document.getElementById('btn-direc-gm').addEventListener('click', function() {
        window.location.href = 'https://www.google.com/maps/dir/?api=1&destination=-11.865518,-77.035988';
    });
    
    document.getElementById('btn-direc-wz').addEventListener('click', function() {
        window.location.href = 'waze://?ll=-11.865518,-77.035988&navigate=yes';
    });
} else {
    document.getElementById("tit-ubic-ruta").remove();
    document.getElementById("btn-direc-gm").remove();
    document.getElementById("btn-direc-wz").remove();
    
    const btn_direc = document.getElementById("btn-direc");

    btn_direc.innerHTML = "ABRIR MAPA";
    btn_direc.addEventListener('click', function() {
        window.open('https://maps.app.goo.gl/KtbnXfRcDnNfBNPb7');
    });
}
