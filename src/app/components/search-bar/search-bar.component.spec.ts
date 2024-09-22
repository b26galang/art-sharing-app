import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { InputTextModule } from 'primeng/inputtext';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputTextModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search bar component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the search icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const searchIcon = compiled.querySelector('i.pi.pi-search');
    expect(searchIcon).toBeTruthy();
  });

  it('should allow user to type into the search bar', () => {
    const searchInput = fixture.debugElement.query(By.css('.search-bar')).nativeElement;
    const testValue = 'Testing artwork search';
    searchInput.value = testValue;
    searchInput.dispatchEvent(new Event('input'));
    expect(searchInput.value).toBe(testValue);
  });
});
