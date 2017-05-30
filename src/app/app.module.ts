import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AtmSearchComponent } from './atm-search/atm-search.component';
import { PostComponent } from './post/post.component';
import { BonusPlusComponent } from './bonus-plus/bonus-plus.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    AtmSearchComponent,
    PostComponent,
    BonusPlusComponent,
    ExchangeComponent
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
