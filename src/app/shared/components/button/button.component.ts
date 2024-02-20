import {
  Component,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() eventoClick = new EventEmitter<any>();
  @Input() label: string = '';
  @Input() icono: string = '';
  @Input() tipo: string = 'button';
  @Input() router: string = '/';
  @Input() isDisabled: boolean = false;
  @Input() estiloBoton: string = 'p-button';
  @Input() tooltip: string = '';
  clase: string = 'p-button-rounded';
  isRouter: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.router != '/') {
      this.isRouter = true;
    }

    switch (this.estiloBoton) {
      case 'rounded':
        this.clase = 'p-button-rounded';
        break;

      case 'text':
        this.clase = 'p-button-text';
        break;

      case 'outlined':
        this.clase = 'p-button-outlined';
        break;

      case 'raised ':
        this.clase = 'p-button-raised';
        break;

      case 'rippled ':
        this.clase = 'p-button-rippled';
        break;

      case 'rounded-danger':
        this.clase = 'p-button-rounded p-button-danger';
        break;

      case 'outlined-rounded-success':
        this.clase = 'p-button-outlined p-button-rounded p-button-success';
        break;


      case 'outlined-rounded-danger':
        this.clase = 'p-button-outlined p-button-rounded p-button-danger';
        break;

      default:
        this.clase = 'p-button';
        break;
    }
  }

  ejecutarEventoClick() {
    this.eventoClick.emit();
  }
}
