import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHackathonsComponent } from './lista-hackathons.component';

describe('ListaHackathonsComponent', () => {
  let component: ListaHackathonsComponent;
  let fixture: ComponentFixture<ListaHackathonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHackathonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHackathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
