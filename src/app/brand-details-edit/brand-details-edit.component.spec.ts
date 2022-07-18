import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDetailsEditComponent } from './brand-details-edit.component';

describe('BrandDetailsEditComponent', () => {
  let component: BrandDetailsEditComponent;
  let fixture: ComponentFixture<BrandDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
