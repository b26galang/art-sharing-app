import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeSwitchComponent } from './dark-mode-switch.component';
import { ButtonModule } from 'primeng/button';
import { By } from '@angular/platform-browser';

describe('DarkModeSwitchComponent', () => {
  let component: DarkModeSwitchComponent;
  let fixture: ComponentFixture<DarkModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a dark mode switch', () => {
    expect(component).toBeTruthy();
  });
});
