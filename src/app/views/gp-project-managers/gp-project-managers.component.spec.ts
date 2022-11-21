import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpProjectManagersComponent } from './gp-project-managers.component';

describe('GpProjectManagersComponent', () => {
  let component: GpProjectManagersComponent;
  let fixture: ComponentFixture<GpProjectManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpProjectManagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpProjectManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
