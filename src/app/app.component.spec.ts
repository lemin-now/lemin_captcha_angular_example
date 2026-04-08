import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LeminCroppedCaptchaModule } from '@leminnow/ng-lemin-cropped-captcha';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Mock the lemin captcha global API so the library component's
    // ngOnDestroy does not throw in the test environment.
    (window as any).leminCroppedCaptcha = {
      getCaptcha: () => null,
      getInstances: () => [],
      destroyAll: () => {},
      reloadAll: () => {},
      resetAll: () => {},
      destroyCaptcha: () => {},
    };

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, LeminCroppedCaptchaModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have default captchaId', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.captchaId).toEqual('YOUR_CAPTCHA_ID');
  });

  it('should have default containerId', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.containerId).toEqual('YOUR_CONTAINER_ID');
  });
});
