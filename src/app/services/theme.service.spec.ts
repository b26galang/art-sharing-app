import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { L } from '@angular/cdk/keycodes';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    const linkElement = document.createElement('link');
    linkElement.id = 'app-theme';
    linkElement.href='assets/theme/light-theme.css'
    document.head.appendChild(linkElement)
  });

  afterEach(() => {
    const linkElement = document.getElementById('app-theme');
    if (linkElement) {
      linkElement.remove();
    }
  });

  it('should change the theme when the dark mode switch is toggled', () => {
    const theme = 'dark-theme';
    service.applyTheme(theme);
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    expect(themeLink.href).toContain('assets/theme/dark-theme.css');
  });
});
