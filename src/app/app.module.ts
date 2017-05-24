import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search-component/search.component';
import { HttpService } from './http-service/http.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
