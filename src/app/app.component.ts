import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit  {
  title = 'Detalhe do evento';
  evento: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  onSubmit = () => {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.evento = params['evento'];
    });
  }

  onRecordButton(): void {
    alert("Reagendar");
  }

  onResqueduleButton(): void {
    alert("Gravar");
  }
  onCancelButton(): void {
    alert("Cancelar");
  }
  onHistoricButton(): void {
    alert("Histórico");
  }
  onRelatedProductsButton(): void {
    alert("Produtos");
  }
  onRelatedImageButton(): void {
    alert("Imagem");
  }
  onCloseButton(): void {
    alert("fechar");
  }

  eventos = new FormGroup({
    setor: new FormControl(''),
    tipo: new FormControl(''),
    motivo: new FormControl(''),
    status: new FormControl(''),
    prioridade: new FormControl(''),
    resolverAte: new FormControl(''),
    registradoPor: new FormControl(''),
    respondidoEm: new FormControl(''),
    destinatario: new FormControl(''),
    cliente: new FormControl(''),
    observacaoOrigem: new FormControl(''),
    resolvidoPor: new FormControl(''),
    resposta: new FormControl('')
  });
}


function loadEvento() {

}
