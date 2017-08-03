import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { youTubeSearchInjectables } from './youtube-search/youtube-search-injectables';
import { YouTubeSearchBoxComponent } from './youtube-search/youtube-search-box.component';
import { YouTubeSearchResultComponent } from './youtube-search/youtube-search-result.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchBoxComponent,
    YouTubeSearchResultComponent
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
