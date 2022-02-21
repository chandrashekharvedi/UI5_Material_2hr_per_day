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
            //Step 2 : Call byId method of the application to get the control object by using this.getView()
            var oInp = this.getView().byId("idInp");
            //Step 3 : On this object you can use the functions
            var oVal = oInp.getValue();
            alert(oVal);
        },
	});
});