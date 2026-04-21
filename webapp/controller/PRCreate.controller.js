sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
  "use strict";

  return Controller.extend("fiori.p2p.controller.PRCreate", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("prlist");
    },

    onCancel: function () {
      MessageBox.confirm("Discard this requisition?", {
        onClose: function (sAction) {
          if (sAction === MessageBox.Action.OK) {
            this.getOwnerComponent().getRouter().navTo("prlist");
          }
        }.bind(this)
      });
    },

    onSubmit: function () {
      // Basic validation
      var sItem   = this.byId("itemDesc").getValue();
      var nQty    = this.byId("qty").getValue();
      var sAmount = this.byId("amount").getValue();
      var oDate   = this.byId("reqDate").getValue();

      if (!sItem || !nQty || !sAmount || !oDate) {
        MessageBox.error("Please fill all required fields before submitting.");
        return;
      }

      // Build new PR object
      var oModel  = this.getOwnerComponent().getModel("p2p");
      var aPRs    = oModel.getProperty("/PurchaseRequisitions");
      var sNewId  = "PR-" + (1000 + aPRs.length + 1);

      var oNewPR = {
        id:         sNewId,
        item:       sItem,
        qty:        parseInt(nQty),
        unit:       this.byId("uom").getSelectedKey(),
        plant:      this.byId("plant").getSelectedItem().getText(),
        vendor:     this.byId("vendor").getSelectedItem().getText(),
        amount:     parseFloat(sAmount),
        currency:   "INR",
        status:     "Pending",
        date:       oDate,
        requestor:  "Current User",
        department: this.byId("dept").getSelectedKey()
      };

      aPRs.push(oNewPR);
      oModel.setProperty("/PurchaseRequisitions", aPRs);

      MessageToast.show(sNewId + " created successfully!");
      setTimeout(function () {
        this.getOwnerComponent().getRouter().navTo("prlist");
      }.bind(this), 1500);
    }
  });
});
