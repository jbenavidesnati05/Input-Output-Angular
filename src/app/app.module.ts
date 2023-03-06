import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreInputComponent } from './componentes/padre-input/padre-input.component';
import { HijoInputComponent } from './componentes/hijo-input/hijo-input.component';
import { HijoOuputComponent } from './componentes/hijo-ouput/hijo-ouput.component';
import { PadreOuputComponent } from './componentes/padre-ouput/padre-ouput.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreInputComponent,
    HijoInputComponent,
    HijoOuputComponent,
    PadreOuputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
