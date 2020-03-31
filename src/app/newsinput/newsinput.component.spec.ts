import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsinputComponent } from './newsinput.component';

describe('NewsinputComponent', () => {
  let component: NewsinputComponent;
  let fixture: ComponentFixture<NewsinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
