import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosSection } from './projetos-section';

describe('ProjetosSection', () => {
  let component: ProjetosSection;
  let fixture: ComponentFixture<ProjetosSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
