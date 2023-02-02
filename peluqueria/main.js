$(document).ready(function(){
       
       //pintar hover
       
       //home
       var hogar=$("#hogar")

    function cambiarColor(){
        $("#home_hogar").attr("src","./img/peluqueria EBEBEB.png")
    }
    function volverColor(){
        $("#home_hogar").attr("src","./img/peluqueria.png")
    }


    hogar.hover(cambiarColor,volverColor)

    //sobre nosotros
    var nosotros=$("#nosotros")
    function cambiarNosotros(){
       $("#sobre_nosotros").attr("src","./img/sobrenosotros pintado.png")
   }
   function volverNosotros(){
       $("#sobre_nosotros").attr("src","./img/sobrenosotros.png")
   }


   nosotros.hover(cambiarNosotros,volverNosotros)

   //interior
   
   var interior=$("#interior")
   function cambiarInterior(){
      $("#silla").attr("src","./img/silla pintada.png")
  }
  function volverInterior(){
      $("#silla").attr("src","./img/silla.png")
  }


  interior.hover(cambiarInterior,volverInterior)

  //Nuestro servicio
   
  var servicio=$("#servicio")
  function cambiarServicio(){
     $("#estilista").attr("src","./img/estilista pintado.png")
 }
 function volverServicio(){
     $("#estilista").attr("src","./img/estilista.png")
 }


 servicio.hover(cambiarServicio,volverServicio)
  

   //Galeria
   
  var galeria=$("#galeria")
  function cambiargaleria(){
     $("#barberia").attr("src","./img/barberia pintado.png")
 }
 function volvergaleria(){
     $("#barberia").attr("src","./img/barberia.png")
 }


 galeria.hover(cambiargaleria,volvergaleria)


 // contacto

 var contacto=$("#contacto")
  function cambiarcontacto(){
     $("#cita").attr("src","./img/cita pintado.png")
 }
 function volvercontacto(){
     $("#cita").attr("src","./img/cita.png")
 }


 contacto.hover(cambiarcontacto,volvercontacto)


 //calendario

 
 var horario = $("#horario")
 var d = new Date()
 var hora = d.getHours() 
 var apertura = $("#apertura")



 if(hora < 20){
    horario.css("color","#01f615")
    apertura.append("Abiero")
    
 }else{
    horario.css("color","red")
    apertura.append("Cerrado")   
 }
 






})