import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtComponent } from './art.component';
import { ArtImageComponent } from '../../components/art-image/art-image.component';

describe('ArtComponent', () => {
  let component: ArtComponent;
  let fixture: ComponentFixture<ArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render single page view for art', () => {
    expect(component).toBeTruthy();
  });

  it('should display image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const artImage = compiled.querySelector('app-art-image');
    expect(artImage).toBeTruthy();
  });

  it('should display the art title in the text container', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const textContainer = compiled.querySelector('.text-container');
    const heading = textContainer?.querySelector('h2');
    expect(heading).toBeTruthy();
  });

  it('should display the art caption in the text container', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const textContainer = compiled.querySelector('.text-container');
    const paragraph = textContainer?.querySelector('p');
    expect(paragraph).toBeTruthy(); 
  });
});
