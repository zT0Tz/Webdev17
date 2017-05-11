import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpgComponent } from './resetpg.component';

describe('ResetpgComponent', () => {
  let component: ResetpgComponent;
  let fixture: ComponentFixture<ResetpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
