sap.ui.define([
    "sap/ui/model/json/JSONModel",
], function(JSONModel) {
	return {
        createJSONModel : function(){
            // Step 1: Create a brand-new object of the Model
            var oModel = new JSONModel();
            // Step 2: Set or Load the data in the Model
            // oModel.setData();
            oModel.loadData("models/mockdata/mydata.json")
            return oModel;
        }
    };
});