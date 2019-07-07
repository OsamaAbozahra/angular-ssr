import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsComponent} from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
