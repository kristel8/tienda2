
export interface IItemMenu {
  nombre: string;
  ruta: string;
  estado: boolean;
  subMenu: IItemSubMenu[];
}

export interface IItemSubMenu {
  nombre: string;
  ruta: string;
  estado: boolean;
}

export interface IUserLogueado {
  imagen: string;
  nombre: string;
  rol: string;
}
