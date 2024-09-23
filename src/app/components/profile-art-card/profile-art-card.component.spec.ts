import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileArtCardComponent } from './profile-art-card.component';
import { LikeButtonComponent } from '../like-button/like-button.component';

describe('ProfileArtCardComponent', () => {
  let component: ProfileArtCardComponent;
  let fixture: ComponentFixture<ProfileArtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileArtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the profile art card component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display the like button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heartIcon = compiled.querySelector('app-like-button');
    expect(heartIcon).toBeTruthy();
  });


});
