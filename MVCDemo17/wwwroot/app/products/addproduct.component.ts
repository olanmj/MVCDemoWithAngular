import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
    selector: 'addproduct',
    templateUrl: './addproduct.component.html'
})

export class AddProductComponent {
    model: Product = new Product(null, null, null, null, null, null, null );

    onSubmit(form: NgForm) {
        console.log('Submitted ' + this.model.name + "::" + this.model.description + "::" + this.model.price);      
    }

}

class Product {
    constructor(private productID: number,
       public name: string,
       public description: string,
       public  price: number,
       public category: string,
       public quantity: number,
       private amountDue: number
    ) { }
}