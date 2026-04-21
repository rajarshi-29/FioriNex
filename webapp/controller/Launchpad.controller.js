sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("fiori.p2p.controller.Launchpad", {
    onNavToPRList:   function () { this.getOwnerComponent().getRouter().navTo("prlist"); },
    onNavToPRCreate: function () { this.getOwnerComponent().getRouter().navTo("prcreate"); },
    onNavToApproval: function () { this.getOwnerComponent().getRouter().navTo("approval"); },
    onNavToPOList:   function () { this.getOwnerComponent().getRouter().navTo("polist"); },
    onNavToGR:       function () { this.getOwnerComponent().getRouter().navTo("goodsreceipt"); },
    onNavToInvoice:  function () { this.getOwnerComponent().getRouter().navTo("invoice"); }
  });
});
