import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from "@uirouter/angular";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './component/nav/nav.component';

const helloState = { name: "hello", url: "/", component: HomeComponent };
const aboutState = { name: "about", url: "/About", component: AboutComponent };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: [helloState, aboutState], useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
