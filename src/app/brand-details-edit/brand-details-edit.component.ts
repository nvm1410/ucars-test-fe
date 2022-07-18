import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-details-edit',
  templateUrl: './brand-details-edit.component.html',
  styleUrls: ['./brand-details-edit.component.css'],
})
export class BrandDetailsEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  brand: any = {};
  brandNameValue:string='';
  brandDescriptionValue:string='';
  brandStatusValue:string=''
  selectValue:string='';
  base64logo:string='';
  async ngOnInit(): Promise<any> {
    const brandId = this.route.snapshot.paramMap.get('id');
    const response = await fetch(`http://localhost:8000/brands/${brandId}`);
    if (response.status !== 200) return;
    this.brand = await response.json();
    
    if (this.brand.logo) {
      this.base64logo=this.brand.logo
      this.brand.logo = `data:image/png;base64,${this.brand.logo}`;
    }
    this.brandNameValue=this.brand.name
    this.brandDescriptionValue=this.brand.description
    this.brandStatusValue=this.brand.is_active?'active':'inactive'
    
  }

  back() {
    this.router.navigateByUrl(`/brands/${this.brand.id}`);
  }
  openImagePicker() {
    const imagePicker = document.querySelector('.img-input') as HTMLElement;
    if (!imagePicker) return;
    imagePicker.click();
    imagePicker.onchange = (evt: any) => {
      const target = evt.target as any;
      const file = target.files[0] as Blob;
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload =  (event) => {
        
        const data=window.btoa(
          event.target!.result as string
        )
        this.base64logo=data
        this.brand.logo=`data:image/png;base64,${data}`
      };
      reader.onerror = function () {
        console.log("couldn't read the file");
      };
    };
  }
  openSelect(){
    const select = document.querySelector('.select-status') as HTMLElement;
    if (!select) return;
    select.click();
  }
  onStatusChange(value:string){
    this.brandStatusValue=value
  }
  onBrandNameChange(value:string){
    this.brandNameValue=value
  }
  onBrandDescriptionChange(value:string){
    this.brandDescriptionValue=value
  }
  async updateBrand(){
    
    const formData  = new FormData();
    formData.append('name',this.brandNameValue)
    formData.append('description', this.brandDescriptionValue)
    formData.append('model_count', this.brand.model_count)
    formData.append('is_active', String(this.brandStatusValue==='active'))
    formData.append('logo', this.base64logo)
    const response = await fetch(`http://localhost:8000/brands/${this.brand.id}`, {
      method: 'PUT',
      body: formData,
    });
    if(response.status!==200) return
    this.router.navigateByUrl(`/brands/${this.brand.id}`);
  }
}
