import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'addproduct',
    templateUrl: './addproduct.component.html'
})

export class AddProductComponent {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    model: Product = new Product();

    onSubmit(form: NgForm, http: Http) {
        console.log('Submitted ' + this.model.name + "::" + this.model.description + "::" + this.model.price);
        let body = `name=${this.model.name}&description=${this.model.description}&price=${this.model.price}&category=${this.model.category}`;
        http.post('/api/products', { body }, { headers: this.headers });
    }
}

class Product {
    constructor(private productID: number = null,
        public name: string = null,
        public description: string = null,
        public price: number = null,
        public category: string = null,
        public quantity: number = null,
        private amountDue: number = null
    ) { }
}