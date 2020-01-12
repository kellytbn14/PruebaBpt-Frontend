import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncisoDComponent } from './inciso-d.component';

describe('IncisoDComponent', () => {
  let component: IncisoDComponent;
  let fixture: ComponentFixture<IncisoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncisoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncisoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
