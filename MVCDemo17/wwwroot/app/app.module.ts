import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './helloworld.component';
import { ProductComponent } from './products/product.component';
import { ProductListComponent } from './products/productlist.component';
import { AddProductComponent } from './products/addproduct.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'hello', component: HelloWorldComponent },
        { path: 'weather', component: WeatherComponent },
        { path: 'products/:id', component: ProductComponent },
        { path: 'products', component: ProductListComponent },
        { path: '**', redirectTo: 'home' }

    ])],

    declarations: [AppComponent, HomeComponent, NavMenuComponent, HelloWorldComponent, WeatherComponent,
                    ProductComponent, ProductListComponent, AddProductComponent], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
