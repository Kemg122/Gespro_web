import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditGpProjectComponent} from './edit-gp-project.component';

describe('EditGpProjectComponent', () => {
  let component: EditGpProjectComponent;
  let fixture: ComponentFixture<EditGpProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGpProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGpProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
