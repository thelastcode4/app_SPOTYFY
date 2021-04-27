let url="https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6/top-tracks?market=US";

let token="Bearer BQDfzrZxPs17G6iYNm-HbHJARBUsIB9XEvMM-MDPVtobK733I1kQG9w0R8IDHrD8-Qn9kB5q3Yk_EXB5KshwfZ9CbwVNQ75UkwzRnlocRrHhMLYfp59Ndw-OeJ2nf2_9vaMFq9xB4gr6T6hf7ulXNm969y4zaM4"
let parametros={
    method:"GET",
    headers:{"Authorization":token}
}

fetch(url,parametros)
.then(respuesta=>respuesta.json())
.then(datos=>seleccionarInformacion(datos))

function seleccionarInformacion(datos){

    
    console.log(datos.tracks[0].preview_url);
    console.log(datos.tracks[0].name);
    console.log(datos.tracks[0].album.images[0].url);

    let cancion=document.getElementById("cancion1");
    cancion.src=datos.tracks[0].preview_url;
}