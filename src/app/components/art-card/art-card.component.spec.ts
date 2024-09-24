import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtCardComponent } from './art-card.component';
import { CardModule } from 'primeng/card';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { ArtImageComponent } from '../art-image/art-image.component';
import { LikeButtonComponent } from '../like-button/like-button.component';

describe('ArtCardComponent', () => {
  let component: ArtCardComponent;
  let fixture: ComponentFixture<ArtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardModule, 
        UserIconComponent, 
        ButtonModule,
        ArtImageComponent,
        OverlayModule,
        LikeButtonComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the art card component', () => {
    expect(component).toBeTruthy();
  });

  /* will need dynamic update in the future */
  it('should display an image',() => {
    const compiled = fixture.nativeElement as HTMLElement;
    const artImage = compiled.querySelector('app-art-image');
    expect(artImage).toBeTruthy();
  });

  it('should display the like button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heartIcon = compiled.querySelector('app-like-button');
    expect(heartIcon).toBeTruthy();
  });

  it('should display the user icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const userIcon = compiled.querySelector('app-user-icon');
    expect(userIcon).toBeTruthy();
  });

  /* will need dynamic update in the future */
  it('should display the username', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const username = compiled.querySelector('span.username');
    expect(username).toBeTruthy();
    expect(username?.textContent).toContain('Username');
  });

  /* add tests for ng-template */
});
