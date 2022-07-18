import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { BrandListItemComponent } from './brand-list-item/brand-list-item.component';
import { BrandDetailsEditComponent } from './brand-details-edit/brand-details-edit.component';
import { FormsModule } from '@angular/forms';
import { BrandCreateComponent } from './brand-create/brand-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandDetailsComponent,
    BrandListItemComponent,
    BrandDetailsEditComponent,
    BrandCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
