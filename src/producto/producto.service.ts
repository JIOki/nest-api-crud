import { Injectable } from '@nestjs/common';
import { Producto } from './producto.entity'; // Asegúrate de que la ruta sea correcta
@Injectable()
export class ProductoService {
    private productos: Producto[] = [
        {id: 1, nombre: 'Producto 1', precio: 100, descripcion: 'Descripción del producto 1', categoria: 'Categoría 1', estado: true, fechaCreacion: new Date()},
        {id: 2, nombre: 'Producto 2', precio: 200, descripcion: 'Descripción del producto 2', categoria: 'Categoría 2', estado: true, fechaCreacion: new Date()},   
        {id: 3, nombre: 'Producto 3', precio: 300, descripcion: 'Descripción del producto 3', categoria: 'Categoría 3', estado: true, fechaCreacion: new Date()},



    ]; // Aquí podrías inicializar con algunos productos si lo deseas

    findAll(): Producto[] {
        return this.productos;
    }

    crear(datos:any): string {
        return 'guardar de productos desde el servicio de productos';
    }


    mostrar(id:number): string {
        return 'Mostrar de productos desde el servicio de productos';
    }

    modificar(id:number,datos:any): string {
        return 'Modificar de productos desde el servicio de productos';
    }

    eliminar(id:number): string {
        return 'Eliminar de productos desde el servicio de productos';
    }

}
