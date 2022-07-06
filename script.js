function validar()
{
    var nombre = document.formulario.txt_nombre.value
    var edad = document.formulario.txt_edad.value
    var correo = document.formulario.txt_correo.value
    var rut = document.formulario.txt_Rut.value
    if (nombre.length<3)
    {
        alert("Nombre debe tener al menos 3 caracteres");
        document.formulario.txt_nombre.focus();
        return false;
    }
    if (parseInt(edad)<18 || parseInt(edad)>65)                
    {
           alert("edad debe ser entre 18 y 65");
           document.fomulario.txt_edad.focus();
           return false;
   }
   if (correo.indexOf('@')<0 || correo.indexOf('.')<0 )
   {
       alert("correo debe incluir un @ y un punto");
       docuement.formulario.txt_correo.focus();
       return false;
   }
   if (Rut.indexOf('-')<0 || Rut.indexOf('.')<0 )
   {
       alert("rut debe incluir un - ");
       docuement.formulario.txt_Rut.focus();
       return false;
   }

   alert("¡¡¡ Todo Correcto !!!");
   document.formulario.action = "http://www.formulario.cl"
   document.formulario.submit() = true
}