import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmplosPipesComponent } from './exmplos-pipes.component';

describe('ExmplosPipesComponent', () => {
  let component: ExmplosPipesComponent;
  let fixture: ComponentFixture<ExmplosPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmplosPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmplosPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
