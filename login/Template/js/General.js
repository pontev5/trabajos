//#region Codigo general

$(document).ready(function () {

//#region Codigo para la vista Login
    let login = $('#loginview').val();
    let MEmp = $('.showSA');

    MEmp.hide();

    if (login == 'true') {

        $('a.gn-icon-menu').hide();
    }
    else {

        $('a.gn-icon-menu').show();
        $.post('/Usuarios/VerificarRol/', {

        }).done(function (result) {

            if (result == '1') {

                //Oculta o Muestra Objetos del Menu cuando el usuario sea Super Admin
                $('.hiddenSupAd').hide();
                MEmp.show();
            }
            else if (result == '2') {

                //Debe Ocultar o Mostrar Objetos cuando el usuario sea Admin


                $.post('/Usuarios/AgregarInformes/', {

                }).done(function (result) {

                    var Nombre_IdUrl = result.split(",");

                    for (let i = 0; i < Nombre_IdUrl.length - 1; i++) {

                        var dato = Nombre_IdUrl[i].split("_");

                        //$('.gn-menu').append('<li id="' + dato[0] + '" class="LinkInforme"><a class="gn-icon gn-icon-informe">' + dato[1] + '</a></li>');
                        $('.ltlogOut').before('<li id="' + dato[0] + '" class="LinkInforme"><a class="gn-icon gn-icon-informe">' + dato[1] + '</a></li>');
                    }
                })

            }
            else if (result == '3') {

                //Oculta o Muestra Objetos del Menu cuando el usuario Sea Usuario
                $('.hiddenUsu').hide();

                $.post('/Usuarios/AgregarInformes/', {


                }).done(function (result) {

                    var Nombre_IdUrl = result.split(",");

                    for (let i = 0; i < Nombre_IdUrl.length - 1; i++) {

                        var dato = Nombre_IdUrl[i].split("_");

                        //$('.gn-menu').append('<li id="' + dato[0] + '" class="LinkInforme"><a class="gn-icon gn-icon-informe">' + dato[1] + '</a></li>');
                        $('.ltlogOut').before('<li id="' + dato[0] + '" class="LinkInforme"><a class="gn-icon gn-icon-informe">' + dato[1] + '</a></li>');
                    }

                })
            }
        })

    }
    //#endregion

//#region Codigo de la vista Update URL

    let URL_rut_Emp = $('#upRut_Empresa').val();
    let Rol_Global = $('#Rol_Glob').val(); //Rol Global que me da las vistas de Url..

    //console.log(URL_rut_Emp);

    if (URL_rut_Emp != '') {
        $('#Rut_Empresa').val(URL_rut_Emp).trigger('change');
    }

    //Dejo sin poder modificar el combobox Empresa..
    if (Rol_Global != 1) {

        //$('#Rut_Empresa').attr('disabled', 'true');
    }

    //#endregion

//#region Codigo de la vista Update Usuario
    let Usu_Rut_Emp = $('#upUsuRut_Emp').val();
    let Usu_Id_Rol = $('#upUsuRol').val(); // Rol Global que me da las vistas Usuario

    if (Usu_Rut_Emp != '') {

        $('#Rut_Empresa_Usu').val(Usu_Rut_Emp).trigger('change');
    }

    if (Usu_Id_Rol != '') {

        $('#Id_Rol_Usu').val(Usu_Id_Rol).trigger('change');
    }

    //dejo sin poder modificar el combobox Empresa..
    if (Rol_Global != 1) {

        $('.hideAdm').hide();
    }
//#endregion

//#region Codigo de la vista Informes

    //oculta o Muestra combobox Segun el Roll en la vista CreateAsinUrl.
    let auRol = $('#auUsuRol').val();
    let auHideAdmin = $('.hideAdmin');
    let auHideSA = $('.hideSAdmin');

    if (auRol != 1) {

        auHideAdmin.hide();
    }
    else {
        auHideSA.hide();
    }



//#endregion


//#region Codigo Footer

    let bienve = $("#BienveFooter").val();
    let footer = $('.lyFooter');

    if (bienve == 'true') {

        footer.show();
    }
    else {
        footer.hide();
    }

//#endregion

})

//Metodo para mostrar Mensaje de Error..
function MensajeError(Mensaje) {

    if (Mensaje == '') {

        $('#mensaje').empty();
    }
    else {

        $('#mensaje').append('<p>' + Mensaje + ' </p>');
    }

}

//#endregion


//#region Codigo para la vista Login

    //Realiza el proceso de Login para entrar al Sistema
    $('#logEnviar').on('click', function (e) {

        e.preventDefault();

        let mail = $('#logMail').val();
        let pass = $('#logPassU').val();
        MensajeError('');


        if (mail == '' || pass == '') {

            if (mail == '') {

                $('#logMail').addClass('GenText');
                $('#logPassU').removeClass('GenText')
                MensajeError('Debe colocar un mail valido');
            }
            else if (pass == '') {

                $('#logMail').addClass('GenText')
                $('#logMail').removeClass('GenText');
                MensajeError('Debe colocar una clave valida');
            }

        }
        else {

            $.post('/Usuarios/Ingresar/', {

                mail: mail,
                Pass: pass

            }).done(function (result) {

                if (result == '') {

                    window.location.href = '/Usuarios/Bienvenido/';
                } else {

                    MensajeError('El mail o contraseña es incorrecto..')
                }
            })
        }


    })

//#endregion

//#region Codigo para la vista MainUsuario

    $(document).on('click', '.mubtnEliminar', function (evento) {

        let val = [];
        let i = 0;
        $(this).parents('tr').find('td').each(function () {

            val[i] = $(this).html();
            i += 1;
        })

        $.post('/Usuarios/EliminarUsuario/', {

            rut: val[0],
            rutEmp: val[5]

        }).done(function (result) {

            if (result == "") {

                let x = $("#snackbar");
                x.addClass("showGood")
                x.append("Se elimino con Exito!!!")
                setTimeout(function () { x.removeClass("showGood"); }, 3000)

                window.location.href = '../PB/Usuarios/MainUsuario/';
            }
            else {

                //console.log(result);

                let x = $("#snackbar");

                x.append(result);

                x.addClass("showBad")

                setTimeout(function () { x.removeClass("showBad"); x.empty();}, 3000)

                
            }

            

        })
    })

    $(document).on('click', '.mubtnModificar', function () {

        let val = [];
        let i = 0;
        $(this).parents('tr').find('td').each(function () {

            val[i] = $(this).html();
            i += 1;
        })

        window.location.href = '/Usuarios/updateUsuario?rut=' + val[0] + '&rutEmp=' + val[5];

    })

    $('.muCrearUsuario').on('click', function () {

        window.location.href = '/Usuarios/CreateUsuario/';
    })

    $('#muCrearUsu').on('click', function (e) {

        e.preventDefault();
        let mensaje = VerificarUsu();

        if (mensaje != '') {

            $('.mensaje').empty();
            $('.mensaje').append('<p>' + mensaje + '</p>');
        }
        else {
            $.post('/Usuarios/CrearUsuario/', {

                Rut_Usu: $('#Rut_Usu').val(),
                Nombre_Usu: $('#Nombre_Usu').val(),
                Apellido_Usu: $('#Apellido_Usu').val(),
                Email_Usu: $('#Email_Usu').val(),
                Clave_Usu: $('#Clave_Usu').val(),
                Rut_Empresa_Usu: $('#Rut_Empresa_Usu2').val(),
                Id_Rol_Usu: $('#Id_Rol_Usu').val()

            }).done(function (result) {
                window.location.href = '/Usuarios/MainUsuario/';
            })
        }
    });

    $('#upModificar').on('click', function (e) {

        e.preventDefault();
        let mensaje = VerificarUsu();

        if (mensaje != '') {

            $('.mensaje').empty();
            $('.mensaje').append('<p>' + mensaje + '</p>');
        }
        else {
            $.post('/Usuarios/ModificarUsuario/', {

                Rut_Usu: $('#Rut_Usu').val(),
                Nombre_Usu: $('#Nombre_Usu').val(),
                Apellido_Usu: $('#Apellido_Usu').val(),
                Email_Usu: $('#Email_Usu').val(),
                Clave_Usu: $('#Clave_Usu').val(),
                Rut_Empresa_Usu: $('#Rut_Empresa_Usu').val(),
                Id_Rol_Usu: $('#Id_Rol_Usu').val()

            }).done(function (result) {

                window.location.href = 'PB/Usuarios/MainUsuario';

            })
        }
    })

//#endregion

//#region Codigo para la vista MainUrl

    //Elimina un Url
    $(document).on('click', '.murlEliminar', function (evento) {

        let val = [];
        let i = 0;
        $(this).parents('tr').find('td').each(function () {

            val[i] = $(this).html();
            i += 1;
        })

        $.post('/Url/Eliminar/', {

            id_url: val[4],
            rutEmp: val[0]


        }).done(function (result) {


            if (result == "") {

                let x = $("#snackbar");
                x.addClass("showGood")
                x.append("Se elimino con Exito!!!")
                setTimeout(function () { x.removeClass("showGood"); }, 3000)
                window.location.href = '/Url/MainUrl/';
            }
            else {

                let x = $("#snackbar");
                x.append(result);
                x.addClass("showBad")
                setTimeout(function () { x.removeClass("showBad"); x.empty(); }, 3000)

            }



            
        })
    })

    //Modifica una URL
    $(document).on('click', '.murlModificar', function () {

        let val = [];
        let i = 0;
        $(this).parents('tr').find('td').each(function () {

            val[i] = $(this).html();
            i += 1;
        })

        //console.log(val[0]);
        //console.log(val[1]);

        window.location.href = '/Url/UpdateUrl?id_url=' + val[4] + '&rutEmp=' + val[0];

    })

    $('#urlModificar').on('click', function (e) {

        e.preventDefault();
        let mensaje = VarificarUrl();

        if (mensaje != '') {

            $('.mensaje').empty();
            $('.mensaje').append('<p>' + mensaje + '</p>');
        }
        else {
            $.post('/Url/ModificarUrl/', {

                Id_Url: $('#upUrl_Id_Url').val(),
                URL: $('#URL').val(),
                Rut_Empresa: $('#Rut_Empresa').val(),
                Nombre_Informe: $('#Nombre_Informe').val(),
                Area_Informe: $('#Area_Informe').val(),

            }).done(function (result) {
                window.location.href = '/Url/MainUrl/';
            })
        }
    })

    //Crea una Url
    $('.murlCrearUrl').on('click', function () {

        window.location.href = '/Url/CreateUrl/';
    })

    $('#urlCrearUrl').on('click', function (e) {

        e.preventDefault();
        let mensaje = VarificarUrl();

        if (mensaje != '') {

            $('.mensaje').empty();
            $('.mensaje').append('<p>' + mensaje + '</p>');
        }
        else {
            $.post('/Url/CrearUrl/', {

                URL: $('#URL').val(),
                Rut_Empresa: $('#Rut_Empresa').val(),
                Nombre_Informe: $('#Nombre_Informe').val(),
                Area_Informe: $('#Area_Informe').val()

            }).done(function () {

                window.location.href = '/Url/MainUrl';
            })
        }
    })

//#endregion

//#region Codigo para la vista MAin Asignar Informe

//Elimina un Informe
$(document).on('click', '.mubtnEliminarAU', function (evento) {

    let val = [];
    let i = 0;
    $(this).parents('tr').find('td').each(function () {

        val[i] = $(this).html();
        i += 1;
    })

    $.post('/AsignacionRoles/EliminarAsign/', {

        rutUsu: val[0],
        id_url: val[1],
        rutEmp: val[2]



    }).done(function () {

        window.location.href = '/AsignacionRoles/MainAsignUrl/';
    })
})

//Evento que envia a la vista Crear Informe
$('.muAsignarAU').on('click', function () {

    window.location.href = '/AsignacionRoles/CreateAsinUrl/';
})

//Al cambiar Combobox Empresa, debe cargar el combobox Usuario
$('#auEmpresa').on('change', function () {

    let rutEmp =  $(this).val();

    if (rutEmp != "") {

        $('#auUsuario1').empty();
        $('#auUsuario1').append('<option>Seleccione...</option>');

        $.post('/AsignacionRoles/CargarComboboxUsaurioSA/', {
            rutEmp: rutEmp
        }).done(function (result) {

            if (result !== "") {

                let val = result.split(',');

                for (let i = 0; i < val.length - 1; i++) {

                    $('#auUsuario1').append(val[i]);

                }
            }
        })
    }
    else
    {
        $('#auUsuario1').empty();
        $('#auUsuario1').append('<option>Seleccione...</option>');
        $('.table').empty();
        $('.table').append('<tr><th>Informe</th><th>Area</th><th>Seleccionar</th></tr >');
    }
})

//Codigo de carga tabla para SuperAdmin
$('#auUsuario1').on('change', function () {

    let rutEmp = $('#auEmpresa').val();
    let rutUsu = $('#auUsuario1').val();

    if (rutUsu != '') {

        $.post('/AsignacionRoles/InformesDisponibles/', {

            rutUsu: rutUsu,
            rutEmp: rutEmp

        }).done(function (result) {

            if (result !== '') {

                let val = result.split(',');

                $('.table').empty();
                $('.table').append('<tr><th>Informe</th><th>Area</th><th>Seleccionar</th></tr >');

                for (let i = 0; i < val.length - 1; i++) {

                    $('#auTablaInfo').append(val[i]);

                }
            }

        })
    }
    else {

        $('.table').empty();
        $('.table').append('<tr><th>Informe</th><th>Area</th><th>Seleccionar</th></tr >');

    }
})

//Codigo de carga tabla para Admin
$('#auUsuario2').on('change', function () {



    if ($(this).val() != '') {

        $.post('/AsignacionRoles/InformesDisponibles/', {

            rutUsu: $(this).val(),
            rutEmp: ''

        }).done(function (result) {

            if (result !== '') {

                let val = result.split(',');
                $('.table').empty();
                $('.table').append('<tr><th>Informe</th><th>Area</th><th>Seleccionar</th></tr >');

                for (let i = 0; i < val.length - 1; i++) {

                    $('#auTablaInfo').append(val[i]);

                }
            }

        })
    }
    else
    {
        $('.table').empty();
        $('.table').append('<tr><th>Informe</th><th>Area</th><th>Seleccionar</th></tr >');
    }



})

//Evento para guardar..
$('.auASignarInfo').on('click', function () {

    let val = '';
    let Rol = $('#auUsuRol').val();
    let rutusu = '';
    let mensaje = VerificarInforme();


    if (mensaje != '') {

        $('.mensaje').empty();
        $('.mensaje').append('<p>' + mensaje + '</p>');
    }
    else {
        $('input[type=checkbox]:checked').each(function () {

            val += $(this).attr('id') + ',';
        })


        if (val != '') {

            if (Rol == 1) {

                rutusu = $('#auUsuario1').val();
            }
            else {

                rutusu = $('#auUsuario2').val();
            }

            $.post('/AsignacionRoles/CrearAsignUrl/', {
                idUrl: val,
                rutUsu: rutusu,
                rutEmp: $('#auEmpresa').val()
            }).done(function (result) {


                if (result != "") {


                } else {
                    window.location.href = '/AsignacionRoles/MainAsignUrl/';
                }
            })
        }
    }
})

//#endregion

//#region Codigo para la vista Main Empresa

    $(document).on('click', '.mEmpEliminar', function () {

        let val = [];
        let i = 0;
        $(this).parents('tr').find('td').each(function () {

            val[i] = $(this).html();
            i += 1;
        })

        $.post('/Empresa/EliminarEmpresa/', {

            rutEmp: val[0]

        }).done(function (result) {

            if (result == "") {

                let x = $("#snackbar");
                x.addClass("showGood")
                x.append("Se elimino con Exito!!!")
                setTimeout(function () { x.removeClass("showGood"); }, 3000)

                window.location.href = '/Empresa/MainEmpresa/';
            }
            else {

                //console.log(result);

                let x = $("#snackbar");

                x.append(result);

                x.addClass("showBad")

                setTimeout(function () { x.removeClass("showBad"); x.empty(); }, 3000)


            }



        })

    })

    $(document).on('click', '.mEmpModificar', function (e) {


        e.preventDefault();

        let val = [];
        let i = 0;
        $(this).parents('tr').find('td').each(function () {

            val[i] = $(this).html();
            i += 1;
        })

        window.location.href = '/Empresa/ModificarEmpresa?rutEmp=' + val[0];

    })

    $('#muModEmp').on('click', function (e) {

        e.preventDefault();

        let mensaje = VerificarEmpresa();

        if (mensaje != '') {

            $('.mensaje').empty();
            $('.mensaje').append('<p>' + mensaje + '</p>');
        } else {

            $.post('/Empresa/ModificarEmp/', {

                Rut_Empresa: $('#Rut_Emp').val(),
                Razon_Social: $('#Razon_Social').val(),
                Direccion: $('#Direccion').val(),
                Telefono: $('#Telefono').val(),
                Representante: $('#Representante').val(),
                Correo_Representante: $('#Correo_Representante').val()

            }).done(function (result) {

                if (result != '') {

                    $('.mensaje').append('<p>' + result + '</p>');
                }
                else{
                    window.location.href = '/Empresa/MainEmpresa/';
                }
            })
        }
    })

    $('.mCrearEmp').on('click', function () {

        window.location.href = '/Empresa/CreateEmpresa';

    });

    $('#muCrearEmp').on('click', function (e) {

        e.preventDefault();
        let mensaje = VerificarEmpresa();

        if (mensaje != '') {

            $('.mensaje').empty();
            $('.mensaje').append('<p>' + mensaje + '</p>');

        }
        else {

            $.post('/Empresa/CrearEmp/', {
                Rut_Empresa: $('#Rut_Empresa').val(),
                Razon_Social: $('#Razon_Social').val(),
                Direccion: $('#Direccion').val(),
                Telefono: $('#Telefono').val(),
                Representante: $('#Representante').val(),
                Correo_Representante: $('#Correo_Representante').val()
            }).done(function (result) {

                if (result != '') {

                    $('.mensaje').append('<p>' + result + '</p>');
                }
                else {
                    window.location.href = '/Empresa/MainEmpresa/';
                }
            

            })

        }
    
    })



//#endregion

//Evento que permite visitar los informes disponibles..
$('#ltDetect').on('click', '.LinkInforme', function () {

    window.location.href = '/Url/Informes?id_Url=' + this.id;

})

//Evento que permite cerrar la session..
$('#ltDetect').on('click', '.ltlogOut', function () {

    $.post('/Usuario/LogOut/', {

    }).done(function () {

        window.location.href = '/Usuario/Login/';
    })


})

//#region Verificaciones..

    function VerificarUsu() {

        let mensaje = '';
        let RolG = $('#Rol_Glob').val();

        if ($('#Rut_Usu').val() == '') {

            $('#Rut_Usu').focus();
            mensaje = 'Debe colocar un Rut de Usuario';

        }
        else if ($('#Nombre_Usu').val() == '') {

            $('#Nombre_Usu').focus();
            mensaje = 'Debe colocar un Nombre de Usuario';
        }
        else if ($('#Apellido_Usu').val() == '') {

            $('#Apellido_Usu').focus();
            mensaje = 'Debe colocar un Apellido de Usuario';
        }
        else if ($('#Email_Usu').val() == '') {

            $('#Email_Usu').focus();
            mensaje = 'Debe colocar un Email de Usuario';
        }
        else if ($('#Clave_Usu').val() == '') {

            $('#Clave_Usu').focus();
            mensaje = 'Debe colocar una Calve de Usuario';
        }
        else if (RolG == 1 && $('#Rut_Empresa_Usu').val() == '') {

            $('#Rut_Empresa_Usu').focus();
            mensaje = 'Debe Seleccionar una Empresa';
        }
        else if ($('#Id_Rol_Usu').val() == '') {

            $('#Id_Rol_Usu').focus();
            mensaje = 'Debe Seleccionar un Rol';
        }

        return mensaje;

    }

    function VarificarUrl() {

        let mensaje = '';
        let RolG = $('#Rol_Glob').val();

        if ($('#Rut_Empresa').val() == '' && RolG == 1) {

            $('#Rut_Empresa').focus();
            mensaje = 'Debe colocar un Rut de Empresa';

        }
        else if ($('#Nombre_Informe').val() == '') {

            $('#Nombre_Informe').focus();
            mensaje = 'Debe colocar un Nombre de Informe';
        }
        else if ($('#URL').val() == '') {

            $('#URL').focus();
            mensaje = 'Debe colocar una Url Valida';
        }
        else if ($('#Area_Informe').val() == '') {

            $('#Area_Informe').focus();
            mensaje = 'Debe colocar un Nombre de Area';
        }

        return mensaje;


}

    function VerificarInforme() {

        let mensaje = '';
        let RolG = $('#auUsuRol').val();
        let check = '';

        $('input[type=checkbox]:checked').each(function () {

            check = $(this).attr('id') + ',';
        })

        if ($('#auEmpresa').val() == '' && RolG == 1) {

            $('#auEmpresa').focus();
            mensaje = 'Debe colocar un Rut de Empresa';

        }
        else if ($('#auUsuario1').val() == '' && RolG == 1) {

            $('#auUsuario1').focus();
            mensaje = 'Debe seleccionar un nombre de Usuario';
        }
        else if ($('#auUsuario2').val() == '' && RolG != 1) {

            $('#auUsuario2').focus();
            mensaje = 'Debe seleccionar un nombre de Usuario';
        }
        else if (check == '') {

            mensaje = 'Debe seleccionar un Inform de la lista para Asignar';
        }

        return mensaje;

    }

    function VerificarEmpresa() {

        let mensaje = '';

        if ($('#Rut_Empresa').val() == '') {

            mensaje = 'Debe color un Rut';
        }
        else if ($('#Razon_Social').val() == '') {

            mensaje = 'Debe colocar una razon social';
        }
        else if ($('#Direccion').val() == '') {

            mensaje = 'Debe colocar una dirección';
        }
        else if ($('#Telefono').val() == '') {

            mensaje = 'Debe colocar un numero de telefono';
        }
        else if ($('#Representante').val() == '') {

            mensaje = 'Debe colocar un nombre de representate';
        }
        else if ($('#Correo_Representante').val() == '') {

            mensaje = 'Debe colocar un mail del representante';
        }

        return mensaje;
    }

//#endregion
