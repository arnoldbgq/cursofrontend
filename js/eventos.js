let Boton = document.getElementById("botoncito");

Boton.addEventListener("mouseout", function () {
  alert("Hiciste clic");
});
let carita = document.getElementById("carita");

carita.addEventListener("mouseover", function () {
  carita.src =
    "https://static.vecteezy.com/system/resources/thumbnails/018/931/547/small_2x/sad-face-of-emoticons-png.png";
});
carita.addEventListener("mouseout", function () {
  carita.src =
    "https://media.istockphoto.com/id/689364180/es/vector/sonriente-icono-de-emoci%C3%B3n-de-personas-positivas-de-cara-de-dibujos-animados.jpg?s=612x612&w=0&k=20&c=WmsDAjUpqWkPR7eGixUhWjfnC1_jcyEaUiB5h1nEWVc=";
});

let foto = document.getElementById("fotAside");

foto.addEventListener("mouseover",function(){
foto.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIlCCc4jsQwvqvy454vQoLWXdr4H9Ppg4nS5dypNvpwbDkkbgXHoZrB8&s=10"
});

foto.addEventListener("mouseout",function(){
foto.src="https://assets.goal.com/images/v3/bltbec5398a7236d760/Dise%C3%B1o_sin_t%C3%ADtulo_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"
});