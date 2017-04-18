"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AddProductComponent = (function () {
    function AddProductComponent() {
        this.model = new Product(null, null, null, null, null, null, null);
    }
    AddProductComponent.prototype.onSubmit = function (form) {
        console.log('Submitted ' + this.model.name + "::" + this.model.description + "::" + this.model.price);
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