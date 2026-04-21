sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, MessageToast) {
  "use strict";

  return Controller.extend("fiori.p2p.controller.PRList", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("launchpad");
    },

    onCreatePR: function () {
      this.getOwnerComponent().getRouter().navTo("prcreate");
    },

    onNavToApproval: function () {
      this.getOwnerComponent().getRouter().navTo("approval");
    },

    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue");
      var oTable = this.byId("prTable");
      var oBinding = oTable.getBinding("items");
      var aFilters = [];
      if (sQuery) {
        aFilters.push(new Filter({
          filters: [
            new Filter("id",   FilterOperator.Contains, sQuery),
            new Filter("item", FilterOperator.Contains, sQuery)
          ],
          and: false
        }));
      }
      oBinding.filter(aFilters);
    },

    onFilterStatus: function (oEvent) {
      var sKey = oEvent.getParameter("selectedItem").getKey();
      var oTable = this.byId("prTable");
      var oBinding = oTable.getBinding("items");
      if (sKey === "All") {
        oBinding.filter([]);
      } else {
        oBinding.filter([new Filter("status", FilterOperator.EQ, sKey)]);
      }
    },

    onPRItemPress: function (oEvent) {
      var oItem = oEvent.getSource().getBindingContext("p2p").getObject();
      MessageToast.show("PR " + oItem.id + " — " + oItem.item + " | Status: " + oItem.status);
    }
  });
});
