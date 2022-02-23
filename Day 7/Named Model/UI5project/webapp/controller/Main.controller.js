sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "mickey/models/model"
], function (
    Controller,
    model
) {
    return Controller.extend("mickey.controller.Main", {
        onInit: function () {
            
             var oModel1 = model.createJSONModel("models/mockdata/mydata.json");
             var oModel2 = model.createJSONModel("models/mockdata/dataset.json");
            // Step 3: Make the model aware to the application/view
            sap.ui.getCore().setModel(oModel1);
            sap.ui.getCore().setModel(oModel2 , "Thanos");

            //syntax 3 : Binding with property specific method
            // this.getView().byId('idSal').bindValue('/empStr/salary');
            //syntax 4 : Binding With Property Generic Method
            this.getView().byId('idCurr').bindProperty('value','/empStr/currency')
        },
        
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