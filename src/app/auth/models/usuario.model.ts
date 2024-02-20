
export interface IUsuario {
  contrasena: string,
  estado: boolean,
  idUsuario: number,
  tipoUsuario: string,
  usuario: string
}

export interface ITipoUsuario {
  tipoUsuario: string,
}

export interface IMenu {
  estado: boolean,
  idMenu: number,
  imagen: string,
  nombre: string,
  ruta: string
}

export interface IDetallePermiso {
  idDetallePermisos: number,
  idMenu: number,
  idUsuario: number
}
