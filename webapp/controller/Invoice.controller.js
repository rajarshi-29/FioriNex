sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
  "use strict";

  return Controller.extend("fiori.p2p.controller.Invoice", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("goodsreceipt");
    },

    onNavHome: function () {
      this.getOwnerComponent().getRouter().navTo("launchpad");
    },

    onVerifyInvoice: function (oEvent) {
      var oCtx   = oEvent.getSource().getBindingContext("p2p");
      var oInv   = oCtx.getObject();
      var sPath  = oCtx.getPath();
      var oModel = this.getOwnerComponent().getModel("p2p");

      MessageBox.confirm(
        "Verify and release payment for " + oInv.id + "?\n\n" +
        "Vendor : " + oInv.vendor + "\n" +
        "Amount : INR " + oInv.totalAmount + " (incl. tax)\n" +
        "Due    : " + oInv.dueDate + "\n\n" +
        "3-Way Match: PO \u2713  GR \u2713  Invoice \u2713",
        {
          title: "Confirm Payment Release",
          actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              oModel.setProperty(sPath + "/status", "Paid");
              MessageToast.show(oInv.id + " verified and payment released. P2P cycle complete!");
            }
          }
        }
      );
    }
  });
});
