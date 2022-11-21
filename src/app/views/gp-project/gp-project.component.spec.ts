import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpProjectComponent } from './gp-project.component';

describe('GpProjectComponent', () => {
  let component: GpProjectComponent;
  let fixture: ComponentFixture<GpProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
