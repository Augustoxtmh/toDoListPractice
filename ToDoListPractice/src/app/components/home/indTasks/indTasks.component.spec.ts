/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndTasksComponent } from './indTasks.component';

describe('IndTasksComponent', () => {
  let component: IndTasksComponent;
  let fixture: ComponentFixture<IndTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
