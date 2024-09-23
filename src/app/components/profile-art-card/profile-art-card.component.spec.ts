import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArtCardComponent } from './profile-art-card.component';

describe('ProfileArtCardComponent', () => {
  let component: ProfileArtCardComponent;
  let fixture: ComponentFixture<ProfileArtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileArtCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileArtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
