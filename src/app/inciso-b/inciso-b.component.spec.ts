import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncisoBComponent } from './inciso-b.component';

describe('IncisoBComponent', () => {
  let component: IncisoBComponent;
  let fixture: ComponentFixture<IncisoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncisoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncisoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
