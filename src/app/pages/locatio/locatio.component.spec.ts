import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatioComponent } from './locatio.component';

describe('LocatioComponent', () => {
  let component: LocatioComponent;
  let fixture: ComponentFixture<LocatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
