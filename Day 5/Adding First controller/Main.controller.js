sap.ui.define(
    //since we create a special JS file
    //which of type controller, we need to inherit from
    //sap standard module - sap/ui/core/mvc/Controller
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        //Inheritence of standard sap ui5 class to
        //define our controller class
        return Controller.extend("mickey.controller.Main",{
            onClick: function() {
                alert("Walla, the button is working");
            }
        });
});