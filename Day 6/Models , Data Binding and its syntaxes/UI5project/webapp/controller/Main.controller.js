sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    return Controller.extend("mickey.controller.Main", {
        onInit: function () {
            // Step 1: Create a brand-new object of the Model
            var oModel = new sap.ui.model.json.JSONModel();
            // Step 2: Set or Load the data in the Model
            oModel.setData({
                "empStr": {
                    "empId": 0001,
                    "empName": "Anubhav",
                    "salary": 8000,
                    "currency": "INR"
                },
            });
            // Step 3: Make the model aware to the application/view
            sap.ui.getCore().setModel(oModel);

            //syntax 3 : Binding with property specific method
            this.getView().byId('idSal').bindValue('/empStr/salary');
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