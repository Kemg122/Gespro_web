import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GpProjectsComponent} from './gp-projects.component';

describe('GpProjectsComponent', () => {
  let component: GpProjectsComponent;
  let fixture: ComponentFixture<GpProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpProjectsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
