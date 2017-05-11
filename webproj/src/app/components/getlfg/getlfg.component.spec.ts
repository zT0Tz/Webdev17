import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlfgComponent } from './getlfg.component';

describe('GetlfgComponent', () => {
  let component: GetlfgComponent;
  let fixture: ComponentFixture<GetlfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetlfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
