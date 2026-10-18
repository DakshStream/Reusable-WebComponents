import { NgModule } from '@angular/core';
import { ShipSharedWebComponentFromLibraryComponent } from './ship-shared-web-component-from-library.component';
import { SharedWebCompComponent } from './components/shared-web-comp/shared-web-comp.component';



@NgModule({
  declarations: [
    ShipSharedWebComponentFromLibraryComponent,
    SharedWebCompComponent
  ],
  imports: [
  ],
  exports: [
    ShipSharedWebComponentFromLibraryComponent,
    SharedWebCompComponent
  ]
})
export class ShipSharedWebComponentFromLibraryModule { }
