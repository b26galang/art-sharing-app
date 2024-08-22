import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCarouselComponent } from './art-carousel.component';

describe('ArtCarouselComponent', () => {
  let component: ArtCarouselComponent;
  let fixture: ComponentFixture<ArtCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
