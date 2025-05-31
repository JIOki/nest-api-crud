import { Body,Controller,Param,Delete, Get, Patch, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';

@Controller('producto')
export class ProductoController {
    constructor (private readonly productoService: ProductoService) {
        // Aquí podrías inyectar el servicio de productos si lo necesitas
        // this.productoService = productoService;

    }

    @Get()
    listarProductos(): Producto[] {
        // Lógica para listar productos
        return this.productoService.findAll();
    }

    @Post()
    crearProductos(@Body()datos:any): string {
        // Lógica para listar productos
       return this.productoService.crear(datos);
    }

    @Get(":id")
    mostrarProductos(@Param() id:number): string {
        // Lógica para listar productos
        return this.productoService.mostrar(id);
    }

    @Patch(":id")
    modificarProductos(): string {
        // Lógica para listar productos
        return this.productoService.modificar(1, {});
    }
    @Delete(":id")
    eliminarProductos(): string {
        // Lógica para listar productos
        return this.productoService.eliminar(1);
    }


}
