L.Control.textbox = L.Control.extend({
   onAdd: function(map) {
      
   var text = L.DomUtil.create('div');
   text.id = "info_text";
   text.innerHTML = 
"<p align=justify> <b>MODO DE USO:" +"</b>"+  "<br>" +
" El mapa es interactivo. Presione sobre un elemento para desplegar su cuadro informativo. En el mapa se representan:<br>1. La red de aguas servidas emplazada en la ladera Este de la Laguna Grande y;  2. La ruta de inspección realizada a través de la ribera Este de Laguna Grande. SCR del mapa: UTM 18 H/EPSG:32718. <br><b>Para acceder a los registros de video, presione sobre las lineas rojas que representan los tramos de la ruta de inspección.</b>" 
+"<br> <br>"  +
"La red de aguas servidas del mapa ha sido levantada e inspeccionada en terreno, quedando registrada en 2 Informes Técnicos, a continuación:<br>" +
"1. Inspección y limpieza red AS ETAPA 1, mayo 2021: <a href=https://drive.google.com/file/d/1RGBgSLH85TmxskS4ptSVAM2eSuB__2zY/view?usp=sharing“ target=_blank rel=noopener noreferrer>Haz click aquí para acceder al documento</a> </b><br>" +   
"2. Inspección y limpieza red AS ETAPA 2, diciembre 2021: <a href=https://drive.google.com/file/d/1ZUAPLDG5GTX7rC71GEqAOKM6gRKc7EQt/view?usp=sharing“ target=_blank rel=noopener noreferrer>Haz click aquí para acceder al documento</a>"  +  "<br>" +
"<p align=justify> <b>RESULTADOS DE LA INSPECCIÓN:" +"</b>"+"<br>" +
"Según la inspección acuática realizada, no se detectan descargas de aguas servidas a la Laguna. Por otra parte, según la inspección reciente de cámaras representativas (6 cámaras), se confirma que la red opera con normalidad. No se observan rebalses; tampoco descargas activas ni pasivas."
 return text;
   },

   onRemove: function(map) {
      // Nothing to do here
   }
    });
    L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
    L.control.textbox({ position: 'bottomleft' }).addTo(map);