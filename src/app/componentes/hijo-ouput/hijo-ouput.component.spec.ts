import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoOuputComponent } from './hijo-ouput.component';

describe('HijoOuputComponent', () => {
  let component: HijoOuputComponent;
  let fixture: ComponentFixture<HijoOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoOuputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
