import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { ContactCeoComponent } from './contact/contact-ceo/contact-ceo.component';
import { Vehicle2Component } from './vehicle2/vehicle2.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthGuard } from './auth.guard';
import { VeiwVehicleComponent } from './veiw-vehicle/veiw-vehicle.component';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { NotifyGuard } from './notify.guard';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';



const routes: Routes = [
  {path:'login', component : LoginComponent },
  {path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent, children:[
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
    {path:'contact-ceo',  component:ContactCeoComponent},
    {path:'veiw-vehicle/:id', component:VeiwVehicleComponent},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent},
    {path:'products', component:ProductsComponent },
    {path:'parent', component: ParentComponent},
    
    
    {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },

  { path :'vehicle2', component:Vehicle2Component},
  {path:'create-user', component:CreateUserComponent },
  {path:'create-vehicle', component:CreateVehicleComponent, canDeactivate:[NotifyGuard] },

   { path :'items', component:ItemsComponent},
  {path:'nav', component: NavComponent },
  {path:'cart', component:CartComponent},
  {path:'rxjs-operators', component:RxjsOperatorsComponent}
  

  
  ] },
  { path: '', component:LoginComponent},
  {path: '**', component : PageNotFoundComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
