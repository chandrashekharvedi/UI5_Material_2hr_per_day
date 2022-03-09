sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
	"use strict";
	 return {
        convertUC : function(name){
        if(name){
            return name.toUpperCase(name);
        }
       },
       formatMyAmount: function(sal, curr){
        // for number format required module "sap/ui/core/format/NumberFormat"
        var oCurrencyFormat = NumberFormat.getCurrencyInstance({
            currencyCode : true
        });
        return oCurrencyFormat.format(sal, curr);
       }
    
    }
});