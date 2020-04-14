import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateMyClassComponent} from './update-my-class.component';

describe('UpdateMyClassComponent', () => {
  let component: UpdateMyClassComponent;
  let fixture: ComponentFixture<UpdateMyClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMyClassComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
