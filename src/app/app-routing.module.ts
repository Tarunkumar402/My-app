import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NaukriComponent } from './naukri/naukri.component';
import { ContactCeoComponent } from './contact/contact-ceo/contact-ceo.component';

const routes: Routes = [
  {path:'login', component : LoginComponent },
  {path: 'dashboard', component: DashboardComponent, children:[
    {path: 'home', component : HomeComponent },
    {path:"welcome",component:WelcomeComponent},
    {path: 'data-binding', component : DataBindingComponent},
    { path: 'calculator', component: CalculatorComponent},
    {path:'event-registration', component: EventRegistrationComponent},
    {path:'rectangle', component:RectangleComponent },
    { path:'employees', component:EmployeesComponent },
    {path:'flipkart', component: FlipkartComponent},
    {path:'vehicles', component: VehiclesComponent},
    {path:'bmi-calculator', component: BmiCalculatorComponent },
    { path:'accounts', component:AccountsComponent},
    {path:'naukri', component:NaukriComponent},
    {path:'contact-ceo',  component:ContactCeoComponent}
    
  ] },
  { path: '', component:LoginComponent},
  {path: '**', component : PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
