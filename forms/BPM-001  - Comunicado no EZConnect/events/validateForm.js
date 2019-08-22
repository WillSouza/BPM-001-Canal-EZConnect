function validateForm(form){
	checkErrorJs(form);
	
	var WKNumState = getValue('WKNumState');
	var WKNextState = getValue('WKNextState');
	
	if(WKNumState == '0' || WKNumState == '3' || WKNumState == '15'){
		
		var solicitacao = form.getValue('solicitacao');
		var tipoSolicitacao = form.getValue('tipoSolicitacao');
		
		if(solicitacao == ""){
			throw "Preenchimento obrigatório do campo Descrição da solicitação.";
		}
		if(tipoSolicitacao == ""){
			throw "Preenchimento obrigatório do Tipo da solicitação.";
		}
	}
	
	if(WKNumState == '4' && WKNextState == '11'){
		var parecerfinal = form.getValue('parecerfinal');
		
		if(parecerfinal == ""){
			throw "Preenchimento obrigatório do campo Parecer do Responsável.";
		}
	}
	
	
}

function checkErrorJs(form) {
	if (form.getValue("__error") == "1") {
		throw "O FORMULARIO POSSUI ERROS. FAVOR VERIFICAR OS CAMPOS NAO PREENCHIDOS.";
	}
}
