sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
  "use strict";

  return Controller.extend("fiori.p2p.controller.GoodsReceipt", {

    onNavBack:      function () { this.getOwnerComponent().getRouter().navTo("polist"); },
    onNavToInvoice: function () { this.getOwnerComponent().getRouter().navTo("invoice"); },

    onPostGR: function (oEvent) {
      var oButton = oEvent.getSource();
      var oCtx    = oButton.getBindingContext("p2p");
      var oGR     = oCtx.getObject();
      var sPath   = oCtx.getPath();
      var oModel  = this.getOwnerComponent().getModel("p2p");

      if (oGR.qtyReceived <= 0) {
        MessageBox.error("Please enter a received quantity greater than 0.");
        return;
      }

      MessageBox.confirm(
        "Post GR for " + oGR.item + "?\nQty Received: " + oGR.qtyReceived + " | PO: " + oGR.poRef,
        {
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              oModel.setProperty(sPath + "/status", "Posted");
              MessageToast.show(oGR.id + " posted successfully! Material document created.");
            }
          }
        }
      );
    }
  });
});
