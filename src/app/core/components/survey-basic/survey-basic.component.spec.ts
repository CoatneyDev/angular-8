import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyBasicComponent } from './survey-basic.component';

describe('SurveyBasicComponent', () => {
  let component: SurveyBasicComponent;
  let fixture: ComponentFixture<SurveyBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
