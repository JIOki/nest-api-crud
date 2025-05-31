export class Producto {


    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    estado: boolean = true;
    fechaCreacion: Date = new Date();

    constructor(id: number, nombre: string, precio: number, descripcion: string, categoria: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }



}