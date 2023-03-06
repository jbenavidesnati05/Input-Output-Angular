import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreOuputComponent } from './padre-ouput.component';

describe('PadreOuputComponent', () => {
  let component: PadreOuputComponent;
  let fixture: ComponentFixture<PadreOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreOuputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
