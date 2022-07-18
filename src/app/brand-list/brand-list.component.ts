import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  constructor(private router: Router) {}
  brands:any=[]
  async ngOnInit(): Promise<any> {
    const response = await fetch('http://localhost:8000/brands')
    if(response.status!==200) return
    this.brands=await response.json()
  }
  toAdd(){
    this.router.navigateByUrl(`/brands/add`);
  }
}
