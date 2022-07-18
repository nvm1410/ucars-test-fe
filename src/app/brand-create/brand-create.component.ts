import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css'],
})
export class BrandCreateComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  brandNameValue: string = '';
  brandDescriptionValue: string = '';
  brandStatusValue: string = 'active';
  selectValue: string = '';
  base64logo: string = '';
  async ngOnInit(): Promise<any> {
    
  }

  back() {
    this.router.navigateByUrl(`/brands`);
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
      reader.onload = (event) => {
        const data = window.btoa(event.target!.result as string);
        this.base64logo = `data:image/png;base64,${data}`;
      };
      reader.onerror = function () {
        console.log("couldn't read the file");
      };
    };
  }
  openSelect() {
    const select = document.querySelector('.select-status') as HTMLElement;
    if (!select) return;
    select.click();
  }
  onStatusChange(value: string) {
    this.brandStatusValue = value;
  }
  onBrandNameChange(value: string) {
    this.brandNameValue = value;
  }
  onBrandDescriptionChange(value: string) {
    this.brandDescriptionValue = value;
  }
  async addBrand() {
    const formData = new FormData();
    formData.append('id', uuidv4());
    formData.append('name', this.brandNameValue);
    formData.append('description', this.brandDescriptionValue);
    formData.append('model_count', String( Math.floor(Math.random() * (1000 - 1 + 1) + 1)));
    formData.append('is_active', String(this.brandStatusValue === 'active'));
    formData.append('logo', this.base64logo.split('data:image/png;base64,')[1]);
    const response = await fetch(
      `http://localhost:8000/brands`,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (response.status !== 201) return;
    this.router.navigateByUrl(`/brands`);
  }
}
