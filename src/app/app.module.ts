import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { youTubeSearchInjectables } from './youtube-search/youtube-search-injectables';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
