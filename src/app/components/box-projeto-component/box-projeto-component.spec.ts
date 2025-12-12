import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProjetoComponent } from './box-projeto-component';

describe('BoxProjetoComponent', () => {
  let component: BoxProjetoComponent;
  let fixture: ComponentFixture<BoxProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxProjetoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
