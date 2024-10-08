import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCubeComponent } from './square-cube.component';

describe('SquareCubeComponent', () => {
  let component: SquareCubeComponent;
  let fixture: ComponentFixture<SquareCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
