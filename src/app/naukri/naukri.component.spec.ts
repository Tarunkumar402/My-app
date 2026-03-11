import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Naukricomponent } from './naukri.component';

describe('NaukriComponent', () => {
  let component: Naukricomponent;
  let fixture: ComponentFixture<Naukricomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Naukricomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Naukricomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
