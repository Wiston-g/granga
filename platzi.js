var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOk: false
};

var vaca  = {
  url: "vaca.png",
  cargaOk:false
};

var cerdo = {
  url: "cerdo.webp",
  cargaOk:false
};
var pollo = {
  url: "pollo.png",
  cargaOk:false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src= vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src= cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src= pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

  function cargarFondo()
  {
    fondo.imagen.cargaOk=true;
    dibujar();
  }
  function cargarVacas()
  {
    vaca.imagen.cargaOk=true;
    dibujar();
  }
  function cargarCerdos()
  {
    cerdo.imagen.cargaOk=true;
    dibujar();
  }
  function cargarPollo()
   {
     pollo.imagen.cargaOk=true;
     dibujar();
  }

                        function dibujar()
  {
    if(fondo.imagen.cargaOk == true)
  {papel.drawImage(fondo.imagen, 0, 0);}

    if(vaca.imagen.cargaOk == true)
  {
    var cantidad = aleatorio(1, 30)
    for(var v =0; v< cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
    papel.drawImage(vaca.imagen, x, y);
  }
}
    if(cerdo.imagen.cargaOk == true)
  {
     var x = aleatorio(0, 420);
     var y = aleatorio(0, 420);
      papel.drawImage(cerdo.imagen, x, y);
  }

    if(pollo.imagen.cargaOk == true)
    { var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(pollo.imagen, x, y);}
  }


                      function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
