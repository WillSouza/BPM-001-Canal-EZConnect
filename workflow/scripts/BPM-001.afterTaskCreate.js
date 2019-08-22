function afterTaskCreate(colleagueId){
	 
	/*
	log.info("##### afterTaskCreate ####");
	    var WKNextState = getValue("WKNextState");
	    var WKNumState = getValue("WKNumState");

	    log.info("WKNumState: " + WKNumState);
	    log.info("WKNextState: " + WKNextState);


	    if (WKNextState == 4) {

	        var prazoFormulario = hAPI.getCardValue('dataSolic');
	        log.info("##### Prazo Formulário: " + prazoFormulario)

	        if (prazoFormulario != undefined && prazoFormulario != '') {

	            var numeroDaSolicitacao = getValue('WKNumProces');
	            var threadDaSolicitacao = 0; // Normalmente 0, quando não for atividade paralela
	            var responsavelPelaTarefa = colleagueId;

	            /* Nesse caso o formato da data salva pelo formulário no exemplo é DD/MM/AAAA, mas isso pode variar de acordo com a formatação utilizada, 
	               mudando assim as posições das informações dentro do array */
	            /* Extrai os dados da data do formulário para um array, para posteriormente transformar em data do Javascript 
	            var arrayPrazoConclusao = prazoFormulario.split("/");
	            var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
	            var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
	            var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano

	            var horaDoPrazo = 64800; // hora em milisegundos = 18:00:00

	            // Cria a data no Javascript
	            var dataDoPrazo = new Date();
	            dataDoPrazo.setDate(dia);
	            dataDoPrazo.setMonth(mes);
	            dataDoPrazo.setFullYear(ano);

	            // Altera o prazo de conclusão
	            hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dataDoPrazo, horaDoPrazo);
	        }

	    }*/
}