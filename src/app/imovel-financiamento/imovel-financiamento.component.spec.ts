import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelFinanciamentoComponent } from './imovel-financiamento.component';

describe('ImovelFinanciamentoComponent', () => {
  let component: ImovelFinanciamentoComponent;
  let fixture: ComponentFixture<ImovelFinanciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImovelFinanciamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImovelFinanciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
