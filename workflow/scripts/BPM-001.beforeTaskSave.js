function beforeTaskSave(colleagueId, nextSequenceId, userList) {


	   var WKNextState = getValue("WKNextState");
	   var WKNumState = getValue("WKNumState");

	   if(WKNextState == 4){

	      var solicitacao = hAPI.getCardValue('solicitacao');

	      if (solicitacao != ""){
	         hAPI.setCardValue('obsHistorico', 'Descrição da solicitação:\n' + solicitacao);
	      }
	   }

	   if(WKNumState == 4){

	      var justProcSolic = hAPI.getCardValue('justProcSolic');

	      if (justProcSolic != ""){
	         hAPI.setCardValue('obsHistorico', 'Justificativa de complemento de informações :\n' + justProcSolic);	          
	      }
	      
	   }

		 atualizaHistorico("obsHistorico"); 
	}


	function atualizaHistorico(name) {
	   if (name == "") { return; }
	   var mensagem = hAPI.getCardValue(name);

	   if (mensagem == null || mensagem == "") {
	       return;
	   }

	   var ultimaAtualizacao = hAPI.getCardValue("ultimaAtualizacao") == "" ? "" : hAPI.getCardValue("ultimaAtualizacao");
	   var historico = hAPI.getCardValue("historico") == "" ? "" : hAPI.getCardValue("historico");

	   var usuarioLogado = "";
	   try {
	       usuarioLogado = usuario();
	   } catch (err) {
	       usuarioLogado = "Erro ao buscar usuário";
	   }

	   var htmlHistoricoNovo = dataHoraAtual() + " - " + usuarioLogado + "\r\n" + mensagem + "\r\n \r\n";

	   hAPI.setCardValue("ultimaAtualizacao", htmlHistoricoNovo);

	   hAPI.setCardValue("historico", ultimaAtualizacao + historico);
	   hAPI.setCardValue(name, "");
	}

	function dataHoraAtual() {
	   var dt = new Date();
	   var txtData = (dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate()) + "/" + ((dt.getMonth() + 1) < 10 ? "0" + (dt.getMonth() + 1) : (dt.getMonth() + 1)) + "/" + dt.getFullYear() + " - " + (dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours()) + ":" + (dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes());
	   return txtData;
	}

	function usuario() {

	   var usuario = getValue('WKReplacement') != "" && getValue('WKReplacement') != null ? getValue('WKReplacement') : getValue("WKUser");

	   var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", usuario, usuario, ConstraintType.MUST);
	   var dsUser = DatasetFactory.getDataset("colleague", ["colleagueName"], [c1], null);
	   return dsUser.getValue(0, "colleagueName");
	}
