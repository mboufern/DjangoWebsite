import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeRendererComponent } from './three-renderer.component';

describe('ThreeRendererComponent', () => {
  let component: ThreeRendererComponent;
  let fixture: ComponentFixture<ThreeRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
