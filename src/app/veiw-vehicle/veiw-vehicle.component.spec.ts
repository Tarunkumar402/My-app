import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwVehicleComponent } from './veiw-vehicle.component';

describe('VeiwVehicleComponent', () => {
  let component: VeiwVehicleComponent;
  let fixture: ComponentFixture<VeiwVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
