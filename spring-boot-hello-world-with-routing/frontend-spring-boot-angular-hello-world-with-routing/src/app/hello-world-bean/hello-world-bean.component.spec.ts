import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldBeanComponent } from './hello-world-bean.component';

describe('HelloWorldBeanComponent', () => {
  let component: HelloWorldBeanComponent;
  let fixture: ComponentFixture<HelloWorldBeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldBeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
