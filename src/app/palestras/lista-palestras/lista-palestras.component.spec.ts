import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPalestrasComponent } from './lista-palestras.component';

describe('ListaPalestrasComponent', () => {
  let component: ListaPalestrasComponent;
  let fixture: ComponentFixture<ListaPalestrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPalestrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPalestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
