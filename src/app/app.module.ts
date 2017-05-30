import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AtmSearchComponent } from './atm-search/atm-search.component';
import { PostComponent } from './post/post.component';
import { BonusPlusComponent } from './bonus-plus/bonus-plus.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HttpService } from './services/http.service';

const appRoutes: Routes = [
  { path: '', component: AtmSearchComponent },
  { path: 'atm-search', component: AtmSearchComponent },
  { path: 'post', component: PostComponent },
  { path: 'bonus-plus', component: BonusPlusComponent },
];

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
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
