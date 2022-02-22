sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";
	return Controller.extend("mickey.controller.Main", {
        onInit: function(){},
        onPress: function(){
            // I want to read the Value of the Input field and
            //Step 2 : First get the view object using this.getView() and then by Using byId get the Ui5 element object
            var oInp = this.getView().byId("idInp");
            //Step 3 : On this object you can use the functions
            var oVal = oInp.getValue();
            alert(oVal);
        },
        onDefault:function(){
            this.getView().byId("idEmpId").setValue("1002");
        }
	});
});