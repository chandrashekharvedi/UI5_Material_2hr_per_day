sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "mickey/models/model",
    "mickey/util/lifeSaver"
], function (
    Controller,
	model,
	lifeSaver
) {
    return Controller.extend("mickey.controller.Main", {
        //global variable @ controller level which is accesssible in current view
        formatter :lifeSaver,
        onInit: function () {
            
             var oModel1 = model.createJSONModel("models/mockdata/mydata.json");
             var oModel2 = model.createJSONModel("models/mockdata/dataset.json");
             var oResource = model.createResourceModel();
            // Step 3: Make the model aware to the application/view
            sap.ui.getCore().setModel(oModel1);
            sap.ui.getCore().setModel(oModel2 , "Thanos");
            sap.ui.getCore().setModel( oResource , "i18n");
            //syntax 3 : Binding with property specific method
            // this.getView().byId('idSal').bindValue('/empStr/salary');
            //syntax 4 : Binding With Property Generic Method
            // this.getView().byId('idCurr').bindProperty('value','/empStr/currency')
        },
        
        onSelect:function (oEvent) {
        //    debugger;
        //Step 1 : get the address of the element which was selected by the user.
        var sPath = oEvent.getParameter('rowContext').getPath();

        //step 2 : get the target of the target control where we want to send data - simple form 
        var oSimpleForm = this.getView().byId('idSimple');

        //step 3: Bind the element to the simple form - send data from memory of element to the simple form
        oSimpleForm.bindElement(sPath);  // the path will be e.g /empTab/2
       },
       onFlip: function (){
           // get model objects
           var oModel = sap.ui.getCore().getModel();
           var oModelThanos = sap.ui.getCore().getModel("Thanos");
           // perform flip flops
           sap.ui.getCore().setModel(oModelThanos);
           sap.ui.getCore().setModel( oModel ,'Thanos');
       }

        // onPress: function () {
        //     // I want to read the Value of the Input field and
        //     //Step 2 : First get the view object using this.getView() and then by Using byId get the Ui5 element object
        //     var oInp = this.getView().byId("idInp");
        //     //Step 3 : On this object you can use the functions
        //     var oVal = oInp.getValue();
        //     alert(oVal);
        // },

        // onDefault: function () {
        //     this.getView().byId("idEmpId").setValue("1002");
        // }
    });
});