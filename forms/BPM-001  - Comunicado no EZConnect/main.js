var mode;
var eztecForms = {
    params: {},
    initForm: function (params) {
        this.params = params;
        var $this = this;
        $(function () {
            mode = params.formMode;
            if (params.formMode == "ADD" || params.formMode == "MOD") {
                $this.onEdit(params);
            } else {
                $this.onView(params);
            }
        });
    },
    onView: function (params) { //Visualização do formulário sem a possibilidade de edição (consulta)
        var WKNumState = params.WKNumState;
        console.log("### Tarefa View : " + WKNumState);


        if(WKNumState == 11){

            $(".justProcSolic").addClass('hide');
            $(".obsProcSolic").css('display','block');
            
            $("#ultimaAtualizacao").removeClass("fs-display-none");
            $("#historico").removeClass("fs-display-none");

            $("button#btn-historico").addClass('hide');
            $("button#printBt").addClass('hide');

        }


    },
    onEdit: function (params) {  //Edição do formulário

        var WKNumState = params.WKNumState;

        setHistorico();

        //alert("teste");
        console.log("### Tarefa : " + WKNumState);

        var now = new Date();
        
        var dateTime = FLUIGC.calendar('#dataPublicComunic', {
            pickDate: true,
            showToday: false,
            daysOfWeekDisabled: [0, 6],
            minDate: now

        });
        


        if (WKNumState == "0" || WKNumState == "3" ) {
            $('.bloco2').addClass('hide');

           
        }

        if (WKNumState == "4") {    

            $("input[name='procSolic']").prop("checked",false);

            $(".justProcSolic").css('display','none');
            $("#justProcSolic").val('');

            $(".obsProcSolic").css('display','none');
            $("#obsProcSolic").val('');
            
        }

        if (WKNumState == "15") {
           


        }



        $("#dataPublicComunic").focus(function(){
            colorBorder('dataPublicComunic');
        });

        $("#solicitacao").focus(function(){
            colorBorder('solicitacao');
        });

        $("#chEztec").change(function () {
            colorBorder('chbx');
        });

        $("#chEztecEscr").change(function () {
            colorBorder('chbx');
        });
        
        $("#chEztecObra").change(function () {
            colorBorder('chbx');
        });
        
        $("#chTecVendas").change(function () {
            colorBorder('chbx');
        });

        $("input[name='procSolic']").change(function () {
            colorBorder('procSolic');
            console.log("--- procSolic: " + $("input[name='procSolic']:checked").val() );
            
            if ($("input[name='procSolic']:checked").val() != 'Finalizar solicitação') {
                console.log("--- Dentro do IF");
                
                $(".justProcSolic").slideDown('slow');

                $(".obsProcSolic").slideUp('slow');
                $("#obsProcSolic").val('');

            } else {
                console.log("--- Dentro de ELSE");
                
                $(".justProcSolic").slideUp('slow');
                $("#justProcSolic").val('');

                $(".obsProcSolic").slideDown('slow');
                $("#obsProcSolic").val('');
            }
        });

        $("#justProcSolic").focus(function () {
            colorBorder('justProcSolic');
        });


    }
};


function setSelectedZoomItem(selectedItem) {


}

function ajustaData(i) {

    console.log("-- ajustaData()");
    

    var dataDoPrazo = new Date;

    dataDoPrazo.setDate(dataDoPrazo.getDate() + i);

    if (dataDoPrazo.getDay() == 6) {
        dataDoPrazo.setDate(dataDoPrazo.getDate() + 2);
    } else if (dataDoPrazo.getDay() == 0) {
        dataDoPrazo.setDate(dataDoPrazo.getDate() + 1);
    } else {
        
    }

    var date = dataDoPrazo.getDate().toString();

    if (date.length == 1) {
        date = 0 + date;
    }
    var mes = (dataDoPrazo.getMonth() + 1).toString();

    if (mes.length == 1) {
        mes = 0 + mes;
    }

    var data = date + "/" + mes + "/" + dataDoPrazo.getFullYear();
    $("#dataSolic").val(data);
    console.log(data);
    
}

function colorBorder(campo) {
    //reloadCSS();
    $('.' + campo).css("color", "");
    $('#' + campo).css("border-color", "");
}

function validaData() {

    console.log("--- blurFunction ---");

    var dataNecessec = $("#dataPublicComunic").val();


    var dataNecessec = dataNecessec.split(" ");


    var data1 = new Date(dataNecessec[0].replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    var now = new Date();


    if (now > data1) {

        $("#dataPublicComunic").val("");
        alert("Data precisar ser maior que a data atual.");

    }

    pegarFimDeSemana();
}

function pegarFimDeSemana() {

     console.log("pegarFDS()")
    var dataNecessec = $('#dataPublicComunic').val();

    var arrayDataNecessec = dataNecessec.split("/");
    var dia = arrayDataNecessec[0]; // Posição 0 do array é o dia
    var mes = arrayDataNecessec[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
    var ano = arrayDataNecessec[2]; // Posição 2 do array é o ano

    var dataDoPrazo = new Date();
    dataDoPrazo.setDate(dia);
    dataDoPrazo.setMonth(mes);
    dataDoPrazo.setFullYear(ano);


    if (dataDoPrazo.getDay() == 0 || dataDoPrazo.getDay() == 6) {
        alert("Selecionar uma data entre segunda e sábado.");
        $('#prazoRevisao').val('');
    }
}


function setHistorico() {
    // console.log("SETHISTORICO()");
    // console.log("-- Mode: " + mode);

    let ultimaAtt = mode == "VIEW" ? $("span#ultimaAtualizacao").html() : $("textarea#ultimaAtualizacao").val();
    let historico = mode == "VIEW" ? $("span#historico").html() : $("textarea#historico").val();

    // console.log("-- ultimaAtt: " + ultimaAtt);
    // console.log("-- historico: " + historico);

    if (ultimaAtt != "") {
        //  console.log('setHistorico 1º if');
        ultimaAtt = ultimaAtt.replace(/(?:\r\n|\r|\n)/g, '<br>');
        $("#dv_ultimaAtualizacao").html(ultimaAtt);
    }
    if (historico != "") {
        //    console.log('setHistorico 2º if');
        historico = historico.replace(/(?:\r\n|\r|\n)/g, '<br>');
        $("#dv_historico").html(historico);
    }
    $("button#btn-historico").click(function () {
        let $dvHist = $("#dv_historico");
        if ($dvHist.is(":visible")) {
            $(this).html("Ver Mais");
            $dvHist.slideUp("slow");
        } else {
            $(this).html("Ocultar");
            $dvHist.slideDown("slow");
        }
    });
}