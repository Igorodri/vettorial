import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContatoComponent } from './box-contato-component';

describe('BoxContatoComponent', () => {
  let component: BoxContatoComponent;
  let fixture: ComponentFixture<BoxContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContatoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
