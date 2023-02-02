$(document).ready(function(){
    //slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive:true,
    });
    
    //div oculto
    
    var texto =[{
        titulo:"Mi portafolios",
        contenido:"Con este proyecto quiero demostrar mis aprendizajes obtenidos a través de los diferentes cursos que he realizado."
    
    }]
    
    
    
    var div =$(".contenedor-oculto").hide()
    
    
    
    
    var leerMas = $(".leer-mas").click(function(){

        
        
        div.css("border","5px solid #ccc")
        .css("height","340px")
        .css("width","340px")
        .css("position","relative")
        .css("left","42%")
        .css("marginTop","30px")
        .css("boxShadow","5px 5px 10px black")
        div.toggle("")
        
        
    })
    $(".leer-mas").show(function(){
        
        texto.forEach((item)=>{
            var text =`
            <div class="contenedor-oculto">
            <h2>${item.titulo}</h2>
            <p>${item.contenido}</P>
            </div>
            `
            
            div.append(text)
        })
    })

    //div oculto de certificados


    var certifica = [{
        titel:"Mis estudios",
        estudios : ["Certificado de HTML y CSS : 15 de Diciembre 2022.", "Certificado de javaScript : 9 de Noviembre 2022." , "Responsive Web Design : 21 de Octubre 2022.", "ESO : 7 de marzo de 2019..", "FPI fontaneria : 2015.","Auxiliar de almacen : 2017."]
    }]

    var dev =$(".ocultodos").hide()
    
    
    
    
    var mas = $(".more").click(function(){

        
        
        dev.css("border","5px solid #ccc")
        .css("height","440px")
        .css("width","340px")
        .css("position","relative")
        .css("left","22%")
        .css("boxShadow","5px 5px 10px black")
        .css("paddingRight","50px")
        .css("paddingBottom","50px")
        dev.toggle("")
        
        
    })
    $(".more").show(function(){
        
        certifica.forEach((i)=>{
            var cert =`
            <div class="ocultodos">
            <h2>${i.titel}</h2>
            <ul>
                <li>${i.estudios[0]}</li>
                <li>${i.estudios[1]}</li>
                <li>${i.estudios[2]}</li>
                <li>${i.estudios[3]}</li>
                <li>${i.estudios[4]}</li>
                <li>${i.estudios[5]}</li>
            </ul>
            </div>
            `
            
            dev.append(cert)
        })
    })


    //pintar con el hover

    //instagram
    var instagram = $("#instagram")

    
    function cambiarInstagram(){
        $(this).attr("src","./img/instagram-pintado.png")
        
                
    }
    function volverInstagram(){
        $(this).attr("src","./img/instagram.png")
    }

    instagram.hover(cambiarInstagram,volverInstagram)

    //linkkedin

    var linkedin = $("#linkedin")

    
    function cambiarLinkedin(){
        $(this).attr("src","./img/linkedin-pintado.png")
        
                
    }
    function volverLinkedin(){
        $(this).attr("src","./img/linquedin.png")
    }

    linkedin.hover(cambiarLinkedin,volverLinkedin)

    //correo

    var correo = $("#correo")

    
    function cambiarcorreo(){
        $(this).attr("src","./img/email-pintado.png")
        
                
    }
    function volvercorreo(){
        $(this).attr("src","./img/email.png")
    }

    correo.hover(cambiarcorreo,volvercorreo)


    //linkkedin

    var whatsap = $("#whatsap")

    
    function cambiarwhatsap(){
        $(this).attr("src","./img/whatsap-pintado.png")
        
                
    }
    function volverwhatsap(){
        $(this).attr("src","./img/whatsap.png")
    }

    whatsap.hover(cambiarwhatsap,volverwhatsap)

    //cambiar tema

    var theme = $("#theme")
    $("#to-black").click(function(){
      theme.attr("href","black.css")
    })
    $("#to-blue").click(function(){
      theme.attr("href","blue.css")
    })
    $("#to-green").click(function(){
      theme.attr("href","green.css")
    })
    $("#to-white").click(function(){
        theme.attr("href","style.css")
      })
    

})      

