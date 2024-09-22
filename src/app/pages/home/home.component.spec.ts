import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ArtCardComponent } from '../../components/art-card/art-card.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PaginatorComponent,
        ArtCardComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the homepage', () => {
    expect(component).toBeTruthy();
  });

  /* will need to dynamic update in the future */
  it('should display art cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const artCard = compiled.querySelector('app-art-card');
    expect(artCard).toBeTruthy();
  });

  it('should display paginator', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const paginator = compiled.querySelector('app-paginator');
    expect(paginator).toBeTruthy();
  });
});
