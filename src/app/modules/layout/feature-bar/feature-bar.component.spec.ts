import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBarComponent } from './feature-bar.component';

describe('FeatureBarComponent', () => {
  let component: FeatureBarComponent;
  let fixture: ComponentFixture<FeatureBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureBarComponent]
    });
    fixture = TestBed.createComponent(FeatureBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
