import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app
import localesEs from '@angular/common/locales/es-MX';
import localesFr from '@angular/common/locales/fr';
import localesDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localesEs );
registerLocaleData( localesFr );
registerLocaleData( localesDe );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
