doza_u = 10;
doza_d = 0;

let cena = {
  ugol:250,
  drowa:250,
  dostavka:600,
  };

  function bolshe(){        //увеличивает дозу угля на 1
    doza_u = doza_u + 1;
    if(doza_u > 100){doza_u = 100;}
    doza_ugol.innerHTML = doza_u;
    window_meshok_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol);
window_itogo_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol)+cena.dostavka;

}
function menshe(){        //увеличивает дозу угля на 1
  doza_u = doza_u - 1;
  if(doza_u < 0){doza_u = 0;}
  doza_ugol.innerHTML = doza_u;
  window_meshok_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol);
window_itogo_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol)+cena.dostavka;

}
function bolshe_d(){        //увеличивает дозу угля на 1
  doza_d = doza_d + 1;
  if(doza_d > 100){doza_d = 100;}
  doza_drowa.innerHTML = doza_d;
  window_meshok_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol);
window_itogo_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol)+cena.dostavka;

}
function menshe_d(){        //увеличивает дозу угля на 1
doza_d = doza_d - 1;
if(doza_d < 0){doza_d = 0;}
doza_drowa.innerHTML = doza_d;
window_meshok_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol);
window_itogo_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol)+cena.dostavka;

}

window_dostavka_chislo.innerHTML = cena.dostavka;
window_meshok_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol);
window_itogo_chislo.innerHTML = (doza_d * cena.drowa) + (doza_u *cena.ugol)+cena.dostavka;


cena_set.innerHTML = cena.drowa+"р";
cena_mesh.innerHTML = cena.ugol + "р";

 function but_pismo(){
   vind_pismo.style.zIndex = 2;
 }
 function button_otmena_pismo(){
   vind_pismo.style.zIndex = -2;
 }
var input = document.getElementById('Name');
function but_zakaz(){

  okno_3.style.zIndex = 2;

  summa = doza_d * cena.drowa + doza_u * cena.ugol + cena.dostavka;
  var myValue = 'доставка: '+ cena.dostavka + "руб, "+ "уголь: "+ doza_u+"меш, " + (doza_u *cena.ugol)+ "руб," + "дрова: "+ doza_d + "меш, " + (doza_d * cena.drowa) + "руб, " + "итого: "+ summa +"руб."  ;
input.value = myValue;
  pole.innerHTML = 'доставка: '+ cena.dostavka + "руб, "+ "уголь: "+ doza_u+"меш, " + (doza_u *cena.ugol)+ "руб," + "дрова: "+ doza_d + "меш, " + (doza_d * cena.drowa) + "руб, " + "итого: "+ summa +"руб." ;


}
function function_otmena(){
  okno_3.style.zIndex = -2;
}

setInterval(bekk,500);
function bekk(){
  zakaz.style.color = "white";
  window_itogo.style.color = "black";
}


setInterval(bekkk,1000);

function bekkk(){
  zakaz.style.color = "blue";
window_itogo.style.color = "white";
}

















//
