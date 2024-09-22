import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserIconComponent } from './user-icon.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

describe('UserIconComponent', () => {
  let component: UserIconComponent;
  let fixture: ComponentFixture<UserIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AvatarModule,
        AvatarGroupModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create the user icon component', () => {
    expect(component).toBeTruthy();
  });
});
