sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/ActionSheet",
  "sap/m/Button",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, ActionSheet, Button, MessageToast, MessageBox) {
  "use strict";

  return Controller.extend("fiori.p2p.controller.PRApproval", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("launchpad");
    },

    onNavToPO: function () {
      this.getOwnerComponent().getRouter().navTo("polist");
    },

    onItemPress: function (oEvent) {
      var oCtx    = oEvent.getSource().getBindingContext("p2p");
      var oObject = oCtx.getObject();
      var sPath   = oCtx.getPath();
      var oModel  = this.getOwnerComponent().getModel("p2p");

      if (oObject.status !== "Pending") {
        MessageToast.show("PR " + oObject.id + " is already " + oObject.status + ".");
        return;
      }

      var oSheet = new ActionSheet({
        title: "Action for " + oObject.id,
        buttons: [
          new Button({
            text: "Approve",
            type: "Accept",
            icon: "sap-icon://accept",
            press: function () {
              oModel.setProperty(sPath + "/status", "Approved");
              MessageToast.show(oObject.id + " approved successfully!");
            }
          }),
          new Button({
            text: "Reject",
            type: "Reject",
            icon: "sap-icon://decline",
            press: function () {
              oModel.setProperty(sPath + "/status", "Rejected");
              MessageToast.show(oObject.id + " rejected.");
            }
          })
        ]
      });
      oSheet.openBy(oEvent.getSource());
    },

    onApproveAll: function () {
      MessageBox.confirm("Approve all pending Purchase Requisitions?", {
        onClose: function (sAction) {
          if (sAction === MessageBox.Action.OK) {
            var oModel = this.getOwnerComponent().getModel("p2p");
            var aPRs   = oModel.getProperty("/PurchaseRequisitions");
            aPRs.forEach(function (oPR, i) {
              if (oPR.status === "Pending") {
                oModel.setProperty("/PurchaseRequisitions/" + i + "/status", "Approved");
              }
            });
            MessageToast.show("All pending PRs approved!");
          }
        }.bind(this)
      });
    }
  });
});
