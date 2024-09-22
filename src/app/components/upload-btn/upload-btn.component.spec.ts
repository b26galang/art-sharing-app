import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadBtnComponent } from './upload-btn.component';

describe('UploadBtnComponent', () => {
  let component: UploadBtnComponent;
  let fixture: ComponentFixture<UploadBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create upload button', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to upload image form when clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const uploadButton = compiled.querySelector('a');
    expect(uploadButton?.getAttribute('href')).toBe('/upload');
  });
});
