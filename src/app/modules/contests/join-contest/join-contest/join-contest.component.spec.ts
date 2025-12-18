import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinContestComponent } from './join-contest.component';

describe('JoinContestComponent', () => {
  let component: JoinContestComponent;
  let fixture: ComponentFixture<JoinContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinContestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
