"use strict";

sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("sap.ui.demo.orderbrowser.controller.NotFound", {
    onInit: function onInit() {
      this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
    },
    _onNotFoundDisplayed: function _onNotFoundDisplayed() {
      this.getModel("appView").setProperty("/layout", "OneColumn");
    }
  });
});