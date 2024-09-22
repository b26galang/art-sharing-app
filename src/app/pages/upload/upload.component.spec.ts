import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadComponent } from './upload.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render upload image form page', () => {
    expect(component).toBeTruthy();
  });

  it('should display upload image button with correct label and icon', () => {
    const uploadButton = fixture.nativeElement.querySelector('p-button[label="Upload Image"]');
    expect(uploadButton).toBeTruthy();
    expect(uploadButton.getAttribute('label')).toBe('Upload Image');
    const icon = uploadButton.querySelector('.pi-upload');
    expect(icon).toBeTruthy();
  });

  it('should display the title label', () => {
    const label = fixture.nativeElement.querySelector('label[for="title"]');
    expect(label).toBeTruthy();
    expect(label.textContent).toContain('Title');
  });

  it('should display the title text input', () => {
    const input = fixture.nativeElement.querySelector('input#title');
    expect(input).toBeTruthy(); 
    expect(input.getAttribute('id')).toBe('title');
    expect(input.getAttribute('type')).toBe('text');
  })

  it('should allow user to type into the title field', () => {
    const titleInput = fixture.nativeElement.querySelector('input#title');
    const testValue = 'Testing title input';
    titleInput.value = testValue;
    titleInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(titleInput.value).toBe(testValue);
  });

  it('should display the caption label', () => {
    const label = fixture.nativeElement.querySelector('label[for="caption"]');
    expect(label).toBeTruthy();
    expect(label.textContent).toContain('Caption');
  });

  it('should display caption text area', () => {
    const texarea = fixture.nativeElement.querySelector('textarea#caption');
    expect(texarea).toBeTruthy(); 
    expect(texarea.getAttribute('id')).toBe('caption');
  });

  it('should allow user to type into into the caption text area field', () => {
    const captionInput = fixture.nativeElement.querySelector('textarea#caption');
    const testValue = 'Testing caption input';
    captionInput.value = testValue;
    captionInput.dispatchEvent(new Event('textarea'));
    fixture.detectChanges();
    expect(captionInput.value).toBe(testValue);
  });

  it('should display post button', () => {
    const postButton = fixture.nativeElement.querySelector('p-button[label="Post"]');
    expect(postButton).toBeTruthy();
    expect(postButton.getAttribute('label')).toBe('Post');
  });
});
