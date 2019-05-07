import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldStringComponent } from './hello-world-string.component';

describe('HelloWorldStringComponent', () => {
  let component: HelloWorldStringComponent;
  let fixture: ComponentFixture<HelloWorldStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
