var beforeSendValidate = function (WKNumstate, WKNextState) {

    console.log("--- beforeSendValidade ---");
    console.log("--- WKNumstate: " + WKNumstate);
    console.log("--- WKNextState: " + WKNextState);

    var block = false;

    if (WKNextState == 4) {
       
        var dataPublicComunic = $("#dataPublicComunic").val();
        var solicitacao = $("#solicitacao").val();
        var chEztec = $("input[name='chEztec']:checked").val();
        var chEztecEscr = $("input[name='chEztecEscr']:checked").val();
        var chEztecObra = $("input[name='chEztecObra']:checked").val();
        var chTecVendas = $("input[name='chTecVendas']:checked").val();

        
        if (dataPublicComunic == "") {
            colorBorder('dataPublicComunic');
            block = true;

        }

        if (solicitacao == "") {
            colorBorder('solicitacao');
            block = true;

        }

        if (chEztec == undefined && chEztecEscr == undefined && chEztecObra == undefined && chTecVendas == undefined) {            
            colorBorder('chbx');
            block = true;
        }

    } 

    if(WKNumstate == 4){

        console.log("--- procSolic: " + $("input[name='procSolic']:checked").val());


        var procSolic = $("input[name='procSolic']:checked").val();
        var justProcSolic = $("#justProcSolic").val();

        if (procSolic == "" || procSolic == undefined) {
            colorBorder('procSolic');
            block = true;
        }
        
        if (procSolic == "Complementar informações (retornar ao solicitante)" && justProcSolic == "" ) {
            colorBorder('justProcSolic');
            block = true;
        }
        
    }


 




    if (block == true) {
        throw "Necessário preencher todos os campos obrigatórios";
    }


    function colorBorder(campo) {
        //reloadCSS();
        console.log("--- campo: "+ campo);
        
        $('.' + campo).css("color", "rgb(255, 80, 80)");
        $('#' + campo).css("border-color", "rgb(255, 80, 80)");
    }


}