import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SideNavComponent } from './side-nav.component';


describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('smallScreen should be true if windowWidth < 768px', () => {
  //   console.log(component.smallScreen);
  //   console.log(window.innerWidth);
  //   window.dispatchEvent(new Event('resize'));
  //   window.resizeTo(500, 800);
  //   window.dispatchEvent(new Event('resize'));
  //   console.log(window.innerWidth);
  //   fixture.detectChanges();
  //   expect(component.smallScreen).toBe(true);

  //   // window.dispatchEvent(new Event('resize'));
  //   // window.resizeTo(400, 800);
  //   // console.log(window.innerWidth);
  //   // expect(component.smallScreen).toBe(false);
  // });






});
