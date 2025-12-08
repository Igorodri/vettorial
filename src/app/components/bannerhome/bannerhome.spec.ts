import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerhome } from './bannerhome';

describe('Bannerhome', () => {
  let component: Bannerhome;
  let fixture: ComponentFixture<Bannerhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerhome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
