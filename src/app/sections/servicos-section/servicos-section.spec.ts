import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosSection } from './servicos-section';

describe('ServicosSection', () => {
  let component: ServicosSection;
  let fixture: ComponentFixture<ServicosSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
