import { Component, OnInit } from '@angular/core';
import { IItemMenu, IUserLogueado } from './models/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  Menu: IItemMenu [] = [];
  Usuario!: IUserLogueado;

  constructor() { }

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
        ruta: '/',
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
        nombre: 'string2',
        ruta: '/empresas',
        estado: false,
        subMenu: []
      }
    ]

    this.Menu = itemsMenu;

  }

  eventoMostrarSubMenu( nombre: string, estado: boolean ) {
    this.Menu.filter( res => res.nombre != nombre).map(el => {el.estado = !estado});
    this.Menu.filter( res => res.nombre === nombre).map(el => {el.estado = !el.estado});
  }

  eventoSeleccionado ( nombre: string, estado: boolean ) {
    const primeraListaMenu = this.Menu.filter( res => res.subMenu != []) ;

    primeraListaMenu.forEach(el => {
      el.subMenu.forEach( res => {
        res.estado = false;
      })
    });

    const listaMenu = this.Menu.filter( res => res.subMenu.find((res) => res.nombre === nombre)
      ) ;

    listaMenu[0].subMenu.filter( res => res.nombre === nombre).map( el => {el.estado = !el.estado});
  }
}
