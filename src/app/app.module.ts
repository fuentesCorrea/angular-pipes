import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common'
import localES from '@angular/common/locales/es';
import localFR from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { CapitalizadaPipe } from './pipes/capitalizada.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenasegPipe } from './pipes/contrasenaseg.pipe';

registerLocaleData(localES)
registerLocaleData(localFR)



@NgModule({
  declarations: [
    AppComponent,
    CapitalizadaPipe,
    DomseguroPipe,
    ContrasenasegPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
