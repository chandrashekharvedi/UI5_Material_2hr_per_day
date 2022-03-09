sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(JSONModel,ResourceModel) {
	return {
        createJSONModel : function(sPath){
            // Step 1: Create a brand-new object of the Model
            var oModel = new JSONModel();
            // Step 2: Set or Load the data in the Model
            // oModel.setData();
            oModel.loadData(sPath)
            return oModel;
        },
        createResourceModel : function(){

            // This model will used to provide langauge support.
            var oResource = new ResourceModel({
                bundleUrl : "i18n/i18n.properties"
            });
            return oResource;
        }
    };
});