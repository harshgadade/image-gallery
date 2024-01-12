import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';
import { SearchpipePipe } from './imagegallery/pipes/searchpipe.pipe';
import { FormsModule } from '@angular/forms';
import { ApicallService } from './myservice/apicall.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImagegalleryComponent,
    SearchpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
