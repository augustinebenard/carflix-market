import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireInspectorComponent } from './hire-inspector.component';

describe('HireInspectorComponent', () => {
  let component: HireInspectorComponent;
  let fixture: ComponentFixture<HireInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
