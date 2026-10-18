import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { SharedWebCompComponent } from 'ship-shared-web-component-from-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  /**
   *
   */
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SharedWebCompComponent, {injector: this.injector});

    customElements.define('shared-web-comp-from-other-angular-repo', el);
  }

}
