$("#btn-enviar").click(function(){
    var parametros ="mensaje="+$("#txt-mensaje").val();

    alert(parametros);

    $.ajax({
        url: 'class/procesar.php',
        method:'POST',
		data:parametros,
        success: function(respuesta){
            $("#ul-chat").append(respuesta);
            $("#txt-mensaje").val('');
        }
    });
});

$("#btn-registro").click(function(){
    var parametros = "nombre=" + $("#txt-nombre").val() + "&" +
                     "apellido=" + $("#txt-apellido").val() + "&" + 
                     "correo=" + $("#txt-email").val() + "&" +
                     "contrasenia=" + $("#txt-contrasena").val();

    alert(parametros);
});

$("#btn-inicio-sesion").click(function(){
    var parametros = "correo=" + $("#txt-correo").val() + "&" +
                     "contrasenia=" + $("#txt-contrasenia").val();

    alert(parametros);
});

$("#btn-post").click(function(){
    var parametros = "post=" + $("#txta-publicar").val()

    alert(parametros);
});

$("#btn-guardar-modal").click(function(){
    var parametros = "nombre=" + $("#txt-nombre-modal").val() + "&" +
                     "apellido=" + $("#txt-apellido-modal").val() + "&" +
                     "titular=" + $("#txta-titular-modal").val() + "&" +
                     "educacion=" + $("#txt-educacion-modal").val() + "&" +
                     "pais=" + $("#slc-pais-modal").val() + "&" +
                     "sector=" + $("#slc-sector-modal").val();

    alert(parametros);
});
