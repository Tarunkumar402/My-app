import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ComponentComponent } from './component/component.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import{ HttpClientModule } from '@angular/common/http';
import { AccountsComponent} from './accounts/accounts.component';
import { PricePipe } from './price.pipe';
import { RolePipe } from './role.pipe';
import { HighlightDirective } from './highlight.directive';
import { CapitalDirective } from './capital.directive';
import { WeatherComponent } from './weather/weather.component';
import { ContactModule } from './contact/contact.module';
import { Vehicle2Component } from './vehicle2/vehicle2.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VeiwVehicleComponent } from './veiw-vehicle/veiw-vehicle.component';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';


import { Calculator2Component } from './calculator2/calculator2.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    EventRegistrationComponent,
    RectangleComponent,
    ComponentComponent,
    EmployeesComponent,
    FlipkartComponent,
    VehiclesComponent,
    BmiCalculatorComponent,
    AccountsComponent,
    PricePipe,
    RolePipe,
    HighlightDirective,
    CapitalDirective,
    WeatherComponent,
    Vehicle2Component,
    CreateUserComponent,
    CreateVehicleComponent,
    VeiwVehicleComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    ItemsComponent,
    NavComponent,
    CartComponent,
  

    Calculator2Component,
          RxjsOperatorsComponent,

    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
