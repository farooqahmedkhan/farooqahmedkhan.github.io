import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
