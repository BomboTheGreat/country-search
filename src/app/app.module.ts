import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './shared/services/app.ajax.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CountriesListComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,RouterModule,AppRoutingModule
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
