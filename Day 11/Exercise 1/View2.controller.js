sap.ui.define([
    'emc/fin/ar/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(BaseController, MessageBox, MessageToast) {
    'use strict';
    return BaseController.extend("emc.fin.ar.controller.View2",{
        onBack: function(){
            this.getView().getParent().to("idView1");
        },
        
        onItemPress: function(){
            MessageToast.show("TODO: Next view navigation to be implemented here");
        }
    });
});