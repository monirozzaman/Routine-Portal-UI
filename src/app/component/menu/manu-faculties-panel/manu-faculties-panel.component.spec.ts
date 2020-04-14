import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManuFacultiesPanelComponent} from './manu-faculties-panel.component';

describe('ManuFacultiesPanelComponent', () => {
  let component: ManuFacultiesPanelComponent;
  let fixture: ComponentFixture<ManuFacultiesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManuFacultiesPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuFacultiesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
