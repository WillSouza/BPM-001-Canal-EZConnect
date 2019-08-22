function enableFields(form) {
    var WKNumState = getValue('WKNumState');
    if (WKNumState == 4) {
        form.setEnabled('dataPublicComunic', false);
        form.setEnabled('solicitacao', false);
        form.setEnabled('chEztec', false);
        form.setEnabled('chEztecEscr', false);
        form.setEnabled('chEztecObra', false);
        form.setEnabled('chTecVendas', false);
        
    }
     if (WKNumState == 15) {
        form.setEnabled('procSolic', false);
        form.setEnabled('justProcSolic', false);
    } 
}