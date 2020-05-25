sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/actions/Press","./Common","sap/ui/test/matchers/AggregationFilled","sap/ui/test/matchers/Properties"],function(e,t,s,i,n){"use strict";e.createPageObjects({onTheDetailPage:{baseClass:s,viewName:"Detail",actions:{iPressProcessorTab:function(){return this.waitFor({id:"iconTabFilterProcessor",actions:new t,errorMessage:"Did not find the processor tab on detail page"})},iPressTheHeaderActionButton:function(e){return this.waitFor({id:e,actions:new t,errorMessage:"Did not find the button with id "+e+" on detail page"})}},assertions:{theObjectPageShowsTheFirstObject:function(){return this.iShouldBeOnTheObjectNPage(0)},iShouldBeOnTheObjectNPage:function(t){return this.waitFor(this.getEntitySet({entitySet:"Orders",success:function(s){var i=s[t].Name;this.waitFor({controlType:"sap.m.ObjectHeader",matchers:new n({title:s[t].Name}),success:function(){e.assert.ok(true,"was on the first object page with the name "+i)},errorMessage:"First object is not shown"})}}))},iShouldSeeTheRememberedObject:function(){return this.waitFor({success:function(){var e=this.getContext().currentItem.bindingPath;this._waitForPageBindingPath(e)}})},_waitForPageBindingPath:function(t){return this.waitFor({id:"page",matchers:function(e){return e.getBindingContext()&&e.getBindingContext().getPath()===t},success:function(s){e.assert.strictEqual(s.getBindingContext().getPath(),t,"was on the remembered detail page")},errorMessage:"Remembered object "+t+" is not shown"})},iShouldSeeTheObjectLineItemsList:function(){return this.waitFor({id:"lineItemsList",success:function(t){e.assert.ok(t,"Found the line items list.")}})},theLineItemsListShouldHaveTheCorrectNumberOfItems:function(){return this.waitFor(this.getEntitySet({entitySet:"Order_Details",success:function(t){return this.waitFor({id:"lineItemsList",matchers:new i({name:"items"}),check:function(e){var s=e.getBindingContext().getProperty("OrderID");var i=t.filter(function(e){return e.OrderID===s}).length;return e.getItems().length===i},success:function(){e.assert.ok(true,"The list has the correct number of items")},errorMessage:"The list does not have the correct number of items."})}}))},theLineItemsTableShouldContainOnlyFormattedUnitNumbers:function(){var t=/^-?[\d,]+\.\d{2}$/;return this.waitFor({controlType:"sap.m.ObjectNumber",success:function(s){e.assert.ok(s.every(function(e){return t.test(e.getNumber())}),"Object numbers are properly formatted")},errorMessage:"LineItems Table has no entries which can be checked for their formatting"})},theLineItemsHeaderShouldDisplayTheAmountOfEntries:function(){return this.waitFor({id:"lineItemsList",matchers:new i({name:"items"}),success:function(t){var s=t.getItems().length;return this.waitFor({id:"lineItemsHeader",matchers:new n({text:"Line Items ("+s+")"}),success:function(){e.assert.ok(true,"The line item list displays "+s+" items")},errorMessage:"The line item list does not display "+s+" items."})}})},iShouldSeeTheShippingInfo:function(){return this.waitFor({id:"SimpleFormShipAddress",viewName:"Shipping",success:function(){e.assert.ok("The shipping tab is rendered")},errorMessage:"Did not find shipping info"})},iShouldSeeTheProcessorInfo:function(){return this.waitFor({id:"SimpleFormProcessorInfo",viewName:"Processor",success:function(){e.assert.ok("The processor tab is rendered")},errorMessage:"Did not find processor info"})},iShouldSeeHeaderActionButtons:function(){return this.waitFor({id:["closeColumn","enterFullScreen"],success:function(){e.assert.ok(true,"The action buttons are visible")},errorMessage:"The action buttons were not found"})},iShouldSeeTheFullScreenToggleButton:function(e){return this.waitFor({id:e,errorMessage:"The toggle button"+e+"was not found"})}}}})});