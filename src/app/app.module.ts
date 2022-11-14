import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HomeComponent} from './pages/home/home.component'
import {TebohoslideModule} from './tebohoslide/tebohoslide.module'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, TebohoslideModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
