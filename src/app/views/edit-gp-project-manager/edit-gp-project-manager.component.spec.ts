import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGpProjectManagerComponent } from './edit-gp-project-manager.component';

describe('EditGpProjectManagerComponent', () => {
  let component: EditGpProjectManagerComponent;
  let fixture: ComponentFixture<EditGpProjectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGpProjectManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGpProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
