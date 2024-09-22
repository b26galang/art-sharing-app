import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenubarComponent } from "./components/menubar/menubar.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display the menubar on all pages', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const searchBar = compiled.querySelector('app-menubar');
    expect(searchBar).toBeTruthy();
  });

/* will be needed if I add dynamic title changing 
  it('should set the title of the browser window', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(document.title).toEqual('Art Vault');
  });
  */
});
