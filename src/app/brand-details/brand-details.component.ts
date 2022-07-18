import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  brand:any={}
  async ngOnInit(): Promise<any> {
    const brandId=this.route.snapshot.paramMap.get('id')
    const response = await fetch(`http://localhost:8000/brands/${brandId}`)
    if(response.status!==200) return
    this.brand=await response.json()
    if (this.brand.logo) {
      this.brand.logo = `data:image/png;base64,${this.brand.logo}`
    }
  }
  back(){
    this.router.navigateByUrl(`/brands`)
  }
  toEdit(brandId:string){
    this.router.navigateByUrl(`/brands/${brandId}/edit`)
  }
}
