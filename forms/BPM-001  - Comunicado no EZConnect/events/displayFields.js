function displayFields(form, customHTML) {
    eztecForms(form, customHTML);

    var ativAcoes = "21";

    var WKNumProces = getValue('WKNumProces');
    var numAtividade = getValue("WKNumState");

    //g.info("#### Inicio do DISPLAYFIELD tarefa :"+numAtividade);

    //log.info("$$$$ WKNumProces: "+WKNumProces);

    var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
    var constraints = new Array(c1);

    var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);

    form.setValue('userAtivo', colaborador.getValue(0, "colleagueName"));

    if (numAtividade != 4) {

        form.setValue('solicitante', colaborador.getValue(0, "colleagueName"));

        var fullDate = new Date();
        var date = fullDate.getDate().toString();

        if (date.length == 1) {
            date = 0 + date;
        }
        var mes = (fullDate.getMonth() + 1).toString();

        if (mes.length == 1) {
            mes = 0 + mes;
        }

        var data = date + "/" + mes + "/" + fullDate.getFullYear();
        form.setValue("dataSolic", data);
    }

	/*var activity = getValue('WKNumState');
    if (activity == 3 || activity == 0) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="parecerfinal"]\').css(\'display\', \'none\');var closers = $(\'*[name="parecerfinal"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="parecerfinal"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="parecerfinal"]\').closest("li").hide()');
        customHTML.append('</script>');
    }
    if (activity == 8) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="parecerfinal"]\').css(\'display\', \'none\');var closers = $(\'*[name="parecerfinal"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="parecerfinal"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="parecerfinal"]\').closest("li").hide()');
        customHTML.append('</script>');
    }*/
}

function eztecForms(form, customHTML) {

    customHTML.append("<script type='text/javascript'>");
    customHTML.append("if (eztecForms && eztecForms.initForm) {");
    customHTML.append("eztecForms.initForm({");
    customHTML.append(" formMode:'" + form.getFormMode() + "',");
    customHTML.append(" WKNumState:'" + getValue("WKNumState") + "',");
    customHTML.append(" WKNumProces:'" + getValue("WKNumProces") + "',");
    customHTML.append(" WKCurrentState:'" + getValue("WKCurrentState") + "',");
    customHTML.append(" isMobile: " + (form.getMobile() != null && form.getMobile()) + ",");
    customHTML.append("});");
    customHTML.append("}</script>");
}