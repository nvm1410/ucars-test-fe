import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-brand-list-item',
  templateUrl: './brand-list-item.component.html',
  styleUrls: ['./brand-list-item.component.css']
})
export class BrandListItemComponent implements OnInit {

  constructor(private router: Router){
  }
  @Input() brand: any = {};
  ngOnInit(): void {
    if (this.brand.logo) {
      this.brand.logo = `data:image/png;base64,${this.brand.logo}`
    }
    if (this.brand.last_update) {
      this.brand.last_update = dayjs(this.brand.last_update).format('DD/MM/YYYY')
    }
  }
  toDetails(brandId:string){
    this.router.navigateByUrl(`/brands/${brandId}`)
  }
}
