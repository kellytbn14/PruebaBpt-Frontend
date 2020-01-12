import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncisoCComponent } from './inciso-c.component';

describe('IncisoCComponent', () => {
  let component: IncisoCComponent;
  let fixture: ComponentFixture<IncisoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncisoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncisoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
