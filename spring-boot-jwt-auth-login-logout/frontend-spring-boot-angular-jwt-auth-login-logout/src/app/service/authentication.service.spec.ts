import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('ServiceComponent', () => {
  let component: AuthenticationService;
  let fixture: ComponentFixture<AuthenticationService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
