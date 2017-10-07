import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosMultiComponent } from './servicos-multi.component';

describe('ServicosMultiComponent', () => {
  let component: ServicosMultiComponent;
  let fixture: ComponentFixture<ServicosMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
