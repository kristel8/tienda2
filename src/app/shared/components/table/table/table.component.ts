import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IColumnasTabla } from 'src/app/shared/models/columnas';
import { IButton, ITable, ITableCaption, ITableHeader } from '../models/table';
import autoTable, { UserOptions } from 'jspdf-autotable'
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChild('dt', {static: false}) el!: ElementRef;

  @Input() listaElementos: any[] = [];
  @Input() columnas: IColumnasTabla[] = [];
  @Input() filas: number = 0;
  @Input() isPaginador: boolean = true;
  @Input() listaElementosAFiltrar: string[] = [];
  @Input() tipoResponsivo: boolean = true;
  @Input() isHoverAFila: boolean = true;
  @Input() isCantidadElementos: boolean = true;
  @Input() isMostrarCaption: boolean = true;
  @Input() isMostrarHeader: boolean = true;
  @Input() isMostrarBody: boolean = true;
  @Input() isMostrarFooter: boolean = true;
  @Input() isMostrarTabla: boolean = true;
  @Input() tituloCaption: string = '';
  @Input() isMostrarBuscador: boolean = true;
  @Input() isMostrarAcciones: boolean = true;
  @Input() isMostrarExportacion: boolean = true;
  @Input() isOpcionEliminar: boolean = true;
  @Input() isOpcionEditar: boolean = true;

  @Input() isMostrarMasOpciones: boolean = false;
  @Input() acciones: IButton[] = [];
  @Input() isSorting: boolean = true;
  @Input() isSubtitulo: boolean = true;
  @Input() anchoColumna: string = '350px';
  @Output() eventoAccion = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  esUnaAccion(tipo: string, data: any, evento?: any) {
    const datos = { tipo, data, evento };
    this.eventoAccion.emit(datos);
  }


  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listaElementos);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'listaElementos');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
