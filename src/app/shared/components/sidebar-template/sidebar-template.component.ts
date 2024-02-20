import { Component, OnInit } from '@angular/core';
import { IItemMenu, IUserLogueado } from '../sidebar/models/sidebar';
import { MenuService } from '../sidebar/service/menu.service';

@Component({
  selector: 'app-sidebar-template',
  templateUrl: './sidebar-template.component.html',
  styleUrls: ['./sidebar-template.component.scss']
})
export class SidebarTemplateComponent implements OnInit {

  Menu: IItemMenu [] = [];
  Usuario!: IUserLogueado;

  constructor( private menuService: MenuService) { }

  ngOnInit(): void {
    this.getUsuario();
    this.getMenu();
  }

  getUsuario () {
    const usuarioLogueado: IUserLogueado = {
      imagen: '',
      nombre: 'Amanda Belliski',
      rol: 'Administrador'
    }

    this.Usuario = usuarioLogueado;
  }


  getMenu () {
    const itemsMenu: IItemMenu[]= [
      {
        nombre: 'Inicio',
        ruta: '/dashboard',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Empresas',
        ruta: '/empresas',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Sucursal',
        ruta: '/sucursales',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Producto',
        ruta: '',
        estado: false,
        subMenu: [
          {
            nombre: 'Categoria',
            ruta: '/categorias',
            estado: false,
          },
          {
            nombre: 'Sub Categoria',
            ruta: '/subcategorias',
            estado: false,
          },
          {
            nombre: 'Producto',
            ruta: '/productos',
            estado: false,
          },
        ]
      },
      {
        nombre: 'Proveedor',
        ruta: '/proveedores',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Compra',
        ruta: '/compras',
        estado: false,
        subMenu: []
      },

      {
        nombre: 'Importar Producto',
        ruta: '/importar-productos',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Documento Impreso',
        ruta: '/config-documento-impresos',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Venta',
        ruta: '/ventas',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Almacén Central',
        ruta: '',
        estado: false,
        subMenu: [
          {
            nombre: 'Almacén Central',
            ruta: '/almacen-central',
            estado: false,
          },
          {
            nombre: 'Envío Sucursal',
            ruta: '/envio-sucursal',
            estado: false,
          },
        ]
      },
      {
        nombre: 'Almacén Sucursal',
        ruta: '',
        estado: false,
        subMenu: [
          {
            nombre: 'Almacén Sucursal',
            ruta: '/almacen-sucursal',
            estado: false,
          },
          {
            nombre: 'Recepción',
            ruta: '/recepcion',
            estado: false,
          },
        ]
      },
      {
        nombre: 'Empleado',
        ruta: '/empleados',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Cliente',
        ruta: '/clientes',
        estado: false,
        subMenu: []
      },
      {
        nombre: 'Seguridad',
        ruta: '',
        estado: false,
        subMenu: [
          {
            nombre: 'Usuarios',
            ruta: '/usuarios',
            estado: false,
          },
        ]
      },
    ]



   this.Menu = itemsMenu;

  //  this.menuService.getAllActive().subscribe(res => {
  //    this.Menu = res;
  //    console.log( this.Menu );
  //  })
  }
}
