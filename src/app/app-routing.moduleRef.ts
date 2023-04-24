import { parseHostBindings } from "@angular/compiler";
import { ContactComponent } from "./contact/contact.component";
import { DomainComponent } from "./domain/domain.component";
import { HomeComponent } from "./home/home.component";
import { HostingComponent } from "./hosting/hosting.component";
import { PaymentComponent } from "./payment/payment.component";
import { PurchaseComponent } from "./purchase/purchase.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes =[
{path:'',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path:'domain',component:DomainComponent},
{path:'hosting',component:HostingComponent},
{path:'payment',component:PaymentComponent},
{path:'purchase',component:PurchaseComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}