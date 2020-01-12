import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncisoAComponent } from './inciso-a.component';

describe('IncisoAComponent', () => {
  let component: IncisoAComponent;
  let fixture: ComponentFixture<IncisoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncisoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncisoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
