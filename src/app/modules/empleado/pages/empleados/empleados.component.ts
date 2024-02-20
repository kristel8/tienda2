import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IColumnasTabla } from 'src/app/shared/models/columnas';
import { MensajesSwalService } from 'src/app/shared/services/mensajes-swal.service';
import { IEmpleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  listaElementos: IEmpleado[] = [];
  cols: IColumnasTabla[] = [];
  colsVisibles: IColumnasTabla[] = [];
  isCargado: boolean = false;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private readonly servicioMensajesSwal: MensajesSwalService
  ) { }

  ngOnInit(): void {
    this.getAllActivosElementos();
  }

  getColumnasTabla() {
    this.cols = [
      { field: 'tipoDocumento', header: 'Tipo de Documento', visibility: true, formatoFecha: '' },
      { field: 'numDocumento', header: 'Número de Documento', visibility: true, formatoFecha: '' },
      { field: 'nombre', header: 'Nombre', visibility: true, formatoFecha: '' },
      { field: 'apellido', header: 'Apellidos', visibility: true, formatoFecha: '' },
      { field: 'direccion', header: 'Direccion', visibility: true, formatoFecha: '' },
      { field: 'telefono', header: 'Telefono', visibility: true, formatoFecha: '' },
      { field: 'celular', header: 'Celular', visibility: true, formatoFecha: '' },
      { field: 'sueldo', header: 'Sueldo', visibility: true, formatoFecha: '' },
      { field: 'cargo', header: 'Cargo', visibility: true, formatoFecha: '' },
      { field: 'area', header: 'Área', visibility: true, formatoFecha: '' },
      { field: 'estado', header: 'Estado', visibility: true, formatoFecha: '' },
    ];

    this.colsVisibles = this.cols.filter((x) => x.visibility == true);
  }

  getAllActivosElementos() {
    const obs = new Observable<boolean>((observer) => {
      this.empleadoService.getAllActivos().subscribe((resp) => {
        this.listaElementos = resp;
        observer.next(true);
      });
    });

    obs.subscribe((res) => {
      if (res) {
        this.isCargado = res;
        this.getColumnasTabla();
      }
    });
  }

  eliminarElemento(data: any) {
    this.servicioMensajesSwal
      .mensajePregunta('¿Está seguro de eliminar el registro?')
      .then((response) => {
        if (response.isConfirmed) {
          this.empleadoService
            .setInactive(data.idEmpleado)
            .subscribe((res) => {
              this.getAllActivosElementos();
              this.servicioMensajesSwal.mensajeRegistroEliminado();
            });
        }
      });
  }


  eventoAccion(datos: any) {
    const { tipo, data } = datos;
    switch (tipo) {
      case 'editar':
        this.editarElemento(data);
        break;

      case 'eliminar':
        this.eliminarElemento(data);
        break;


      default:
        console.log('Acción no aplicada');
        break;
    }
  }

  editarElemento(data: any) {
    const id = data.idEmpleado;
    this.router.navigateByUrl(`empleados/mantenimiento-empleado/${id}`);
  }
}
