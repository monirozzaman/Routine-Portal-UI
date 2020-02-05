import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuAdminPanelComponent } from './manu-admin-panel.component';

describe('ManuAdminPanelComponent', () => {
  let component: ManuAdminPanelComponent;
  let fixture: ComponentFixture<ManuAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
