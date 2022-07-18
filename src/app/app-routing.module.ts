import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { BrandDetailsEditComponent } from './brand-details-edit/brand-details-edit.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { BrandListComponent } from './brand-list/brand-list.component';

const routes: Routes = [
  {
    path:'brands',
    component: BrandListComponent
  },
  {
    path:'brands/add',
    component: BrandCreateComponent
  },
  {
    path:'brands/:id',
    component: BrandDetailsComponent
  },
  {
    path:'brands/:id/edit',
    component: BrandDetailsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
