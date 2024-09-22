import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenubarComponent } from './menubar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { DarkModeSwitchComponent } from '../dark-mode-switch/dark-mode-switch.component';
import { UploadBtnComponent } from '../upload-btn/upload-btn.component';
import { UserIconComponent } from '../user-icon/user-icon.component';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToolbarModule,
        SearchBarComponent,
        DarkModeSwitchComponent,
        UploadBtnComponent,
        UserIconComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the menubar component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title/logo Art Vault and link to the landing page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoLink = compiled.querySelector('a.brand-title');
    expect(logoLink).toBeTruthy();
    expect(logoLink?.textContent).toContain('Art Vault');
    expect(logoLink?.getAttribute('href')).toBe('/');
  });

  it('should display the searchbar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const searchBar = compiled.querySelector('app-search-bar');
    expect(searchBar).toBeTruthy();
  });

  it('should display the toggle button for dark mode', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const darkModeSwitch = compiled.querySelector('app-dark-mode-switch');
    expect(darkModeSwitch).toBeTruthy();
  });

  it('should display the upload image button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const uploadButton = compiled.querySelector('app-upload-btn');
    expect(uploadButton).toBeTruthy();
  });

  it('should display the user profile avatar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const userIcon = compiled.querySelector('app-user-icon');
    expect(userIcon).toBeTruthy();
  });





});
