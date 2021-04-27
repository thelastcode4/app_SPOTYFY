let url="https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6/top-tracks?market=ES";

let token="Bearer BQD2OBZI8NeGkWqQqwT_zHsFndQoK0VxiP5YjlT_R04VPdE4hncuKyIeM4cGwb2W8MGfpbIVSPCXegUzxpXqzHqgJsX0EpGXY21wd61rpK78alBaSnVON3Gd4VW-m9QTZdGMeT5HWLbfJ5FdZNLa8vhg6mHY8Eo";

let parametros={
    method:"GET",
    headers:{"Authorization":token}
}

fetch(url,parametros)
.then(respuesta => respuesta.json())
.then(datos => seleccionarInformacion(datos))

function seleccionarInformacion(datos){
   
    console.log(datos.tracks[0].album.images[0].url);
    console.log(datos.tracks[0].preview_url);
    console.log(datos.tracks[0].name);

    let cancion=document.getElementById("canciones1");
    cancion.src=datos.tracks[0].preview_url;
}
