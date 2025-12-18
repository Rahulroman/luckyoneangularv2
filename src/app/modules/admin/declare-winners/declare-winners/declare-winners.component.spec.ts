import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareWinnersComponent } from './declare-winners.component';

describe('DeclareWinnersComponent', () => {
  let component: DeclareWinnersComponent;
  let fixture: ComponentFixture<DeclareWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclareWinnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclareWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
