import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosSection } from './contatos-section';

describe('ContatosSection', () => {
  let component: ContatosSection;
  let fixture: ComponentFixture<ContatosSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
