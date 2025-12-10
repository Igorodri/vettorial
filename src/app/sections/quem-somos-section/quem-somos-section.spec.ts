import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemSomosSectiom } from './quem-somos-section';

describe('QuemSomosSectiom', () => {
  let component: QuemSomosSectiom;
  let fixture: ComponentFixture<QuemSomosSectiom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuemSomosSectiom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuemSomosSectiom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
