import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DomainComponent } from './domain/domain.component';
import { HomeComponent } from './home/home.component';
import { HostingComponent } from './hosting/hosting.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PaymentComponent } from './payment/payment.component';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DomainComponent,
    HomeComponent,
    HostingComponent,
    PurchaseComponent,
    PaymentComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [HomeComponent]
})
export class AppModule { }
