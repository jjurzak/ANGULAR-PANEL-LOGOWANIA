import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNauczycielaComponent } from './panel-nauczyciela.component';

describe('PanelNauczycielaComponent', () => {
  let component: PanelNauczycielaComponent;
  let fixture: ComponentFixture<PanelNauczycielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelNauczycielaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNauczycielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
