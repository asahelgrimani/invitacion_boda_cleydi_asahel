const inv_list = {
    '105899':['ENSON GRIMANI','CECILIA GRIMANI'],
    '128806':['EDISON CARRASCO','HERMELINDA CARRASCO'],
    '135572':['GERALDINE ALBORNOZ','ÁLVARO ALBORNOZ'],
    '145953':['MARÍA ATUNCA','LORENZA ATUNCA'],
    '148737':['EMERSON GRIMANI','SARELA GRIMANI','NOÉ GRIMANI'],
    '150293':['GISELA GRIMANI','JEFFREY ALVITES'],
    '152528':['GIANNINA GRIMANI','JESÉ VALLE GRIMANI','ANGELO VALLE GRIMANI','ALEXA VALLE GRIMANI'],
    '153975':['LUCIA GRIMANI'],
    '157331':['CARLOS MALPARTIDA','ZAIDA MALPARTIDA'],
    '159178':['MANUEL ROMÁN','EVA ROMÁN'],
    '171037':['LISBET PEREDA'],
    '179415':['VERONICA ZAMBRANO'],
    '182361':['ALVARO MORALES'],
    '188770':['DILAN ESPINOZA','JESSICA ESPINOZA','VALERIA ESPINOZA'],
    '195435':['FRANCISCO CORONADO','BLANCA CORONADO'],
    '195586':['JOSUÉ CORONADO'],
    '202328':['PERCY CHIPANA','SANDRA CHIPANA'],
    '213503':['LISANDRO SOTO'],
    '219868':['BEATRIZ OROZCO'],
    '222421':['DAMARIS PINTADO'],
    '259686':['ELIHÚ PINTADO'],
    '267348':['JOEL HERNÁNDEZ'],
    '267833':['HECTOR HERNÁNDEZ','MILAGROS HERNÁNDEZ','LUANA HERNÁNDEZ'],
    '278219':['MOISÉS MONTOYA','ROSIMAR MONTOYA'],
    '296141':['MARCO RUIZ'],
    '893849':['RAFAEL SALVADOR'],
    '301888':['MISAEL MONTOYA'],
    '302386':['MARCELO ATAUQUE','ROCIO ATAUQUE'],
    '305841':['TOMAS AGUILAR','MARIA AGUILAR'],
    '327337':['HERIBERTO AGUILAR','VERONICA LAZARO','HADY AGUILAR','ENNGY AGUILAR'],
    '355997':['NANCY AGUILAR','MISAEL QUISPE'],
    '360724':['ESPERANZA AGUILAR','RENE SORIA','CIELO SORIA'],
    '377850':['CESAR AGUILAR','MELINA AGUILAR','ELIOT','KATRINA'],
    '406363':['WILDER AGUILAR'],
    '451151':['LUCIA AGUILAR'],
    '464963':['TOMAS AGUILAR','GLORIA AGUILAR'],
    '468287':['MARINO','JOSELINE'],
    '488525':['VICENTE','VICTORIA','ROGER','MYRA','KELLY'],
    '519116':['MARUJA ','ELMER'],
    '522889':['MAURO ','ELENA'],
    '527474':['SHANTAL LOAYZA','AURORA LOAYZA','ALBERTO LOAYZA'],
    '536216':['DAVID SANTOS','MARIBEL SANTOS'],
    '537848':['MARILÚ MEGO'],
    '539983':['MONICA FLORES'],
    '541741':['MARÍA MATEO','SARITA MATEO'],
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
    '621098':['MARISOL','TARSIS'],
    '623116':['RINA','MATIAS'],
    '624669':['SUSAN','ESPOSO'],
    '639281':['EDGAR'],
    '672763':['YELVI CUENTAS','LISBETH CUENTAS'],
    '326854':['JULIO RODRIGUEZ','SANDRA RODRIGUEZ'],
    '387958':['LÁZARO QUISPE','BEATRIZ QUISPE'],
    '946374':['OLENKA ZUÑIGA','ASHLEY ZUÑIGA'],
    '758987':['SUMAYRA QUISPE','LEONEL QUISPE'],
    '495869':['RICARDO CARRILLO'],
    '859305':['MARITZA LLANQUE'],
    '295839':['EDWIN GUERRERO','MARISOL GUERRERO'],
    '694869':['MAURA AGUILAR','SAMIR AGUILAR'],
    '285938':['CYNTHIA VEGA','PERCY','KASSANDRA GARCIA'],
    '285288':['ANDRES'],
    '769348':['JUNIOR CHIARA'],
    '297845':['JUNOT ARELLAN'],
    '436515':['LUIS BANCES'],
    '386748':['JOSELYN'],
    '438574':['ALICIA']
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

function print_cant_inv(id) {
    const cant_inv = document.getElementById('num-inv');
    cant_inv.innerHTML = inv_list[id].length + ' PASE(S)'

}

const id = getQueryVariable();

if (id in inv_list) {
    print_name_elements(id);
    print_cant_inv(id);
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

export function print_inv_list_csv_f_l() {
    let csv_format = "";

    for (const key in inv_list) {
        if (inv_list.hasOwnProperty(key)) {
            const elements = inv_list[key];
            csv_format += `${key},${elements.join(',')}\n`;
        }
    }

    console.log(csv_format);
}

window.print_inv_list_csv_f = print_inv_list_csv_f_l;
