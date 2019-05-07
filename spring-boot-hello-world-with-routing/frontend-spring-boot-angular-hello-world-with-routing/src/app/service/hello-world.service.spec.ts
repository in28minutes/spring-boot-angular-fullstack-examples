import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldService } from './hello-world.service';

describe('ServiceComponent', () => {
  let component: HelloWorldService;
  let fixture: ComponentFixture<HelloWorldService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
