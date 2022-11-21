import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from "@uirouter/angular";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './component/nav/nav.component';
import { SkillComponent } from './component/skill/skill.component';




import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatProgressBarModule } from '@angular/material/progress-bar';

const helloState = { name: "hello", url: "/", component: HomeComponent };
const aboutState = { name: "about", url: "/About", component: AboutComponent };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: [helloState, aboutState], useHash: true }),
    MatSlideToggleModule,
    MatProgressBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
