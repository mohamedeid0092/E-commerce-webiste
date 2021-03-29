import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TestComponent } from './test/test.component';
import { ProductService } from './_services/product.services';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomAppRoutingModule } from './app-routing.module';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './features/product/product.module';
import { MyInterceptorService } from './_services/my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CustomAppRoutingModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   {path: 'product-listing', component: ProductListingComponent},
    //   {path: 'login', component: LoginComponent}
    // ])
  ],
  providers: [ProductService, PaymentTypeService, ProductCategoryService,
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
