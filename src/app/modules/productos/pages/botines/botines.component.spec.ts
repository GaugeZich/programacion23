import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotinesComponent } from './botines.component';

describe('BotinesComponent', () => {
  let component: BotinesComponent;
  let fixture: ComponentFixture<BotinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotinesComponent]
    });
    fixture = TestBed.createComponent(BotinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
