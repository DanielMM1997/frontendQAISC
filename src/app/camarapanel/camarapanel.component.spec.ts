import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamarapanelComponent } from './camarapanel.component';

describe('CamarapanelComponent', () => {
  let component: CamarapanelComponent;
  let fixture: ComponentFixture<CamarapanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamarapanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamarapanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
