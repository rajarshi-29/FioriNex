sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";
  return Controller.extend("fiori.p2p.controller.POList", {
    onNavBack:  function () { this.getOwnerComponent().getRouter().navTo("launchpad"); },
    onNavToGR:  function () { this.getOwnerComponent().getRouter().navTo("goodsreceipt"); },
    onRefresh:  function () { MessageToast.show("PO list refreshed."); },
    onPOPress:  function (oEvent) {
      var oObj = oEvent.getSource().getBindingContext("p2p").getObject();
      MessageToast.show("PO " + oObj.id + " | Vendor: " + oObj.vendor + " | Amount: INR " + oObj.amount);
    }
  });
});
