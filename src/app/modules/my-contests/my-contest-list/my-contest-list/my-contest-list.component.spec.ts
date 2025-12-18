import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContestListComponent } from './my-contest-list.component';

describe('MyContestListComponent', () => {
  let component: MyContestListComponent;
  let fixture: ComponentFixture<MyContestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContestListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyContestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
