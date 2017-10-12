import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSucessoComponent } from './msg-sucesso.component';

describe('MsgSucessoComponent', () => {
  let component: MsgSucessoComponent;
  let fixture: ComponentFixture<MsgSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
