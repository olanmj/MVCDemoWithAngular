"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AddProductComponent = (function () {
    function AddProductComponent() {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.model = new Product();
    }
    AddProductComponent.prototype.onSubmit = function (form, http) {
        console.log('Submitted ' + this.model.name + "::" + this.model.description + "::" + this.model.price);
        var body = "name=" + this.model.name + "&description=" + this.model.description + "&price=" + this.model.price + "&category=" + this.model.category;
        http.post('/api/products', JSON.stringify(body), { headers: this.headers });
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    core_1.Component({
        selector: 'addproduct',
        templateUrl: './addproduct.component.html'
    })
], AddProductComponent);
exports.AddProductComponent = AddProductComponent;
var Product = (function () {
    function Product(productID, name, description, price, category, quantity, amountDue) {
        if (productID === void 0) { productID = null; }
        if (name === void 0) { name = null; }
        if (description === void 0) { description = null; }
        if (price === void 0) { price = null; }
        if (category === void 0) { category = null; }
        if (quantity === void 0) { quantity = null; }
        if (amountDue === void 0) { amountDue = null; }
        this.productID = productID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
        this.amountDue = amountDue;
    }
    return Product;
}());
//# sourceMappingURL=addproduct.component.js.map