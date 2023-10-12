import { ListaService } from './lista.service';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
export declare class ListaController {
    private readonly listaService;
    constructor(listaService: ListaService);
    create(createListaDto: CreateListaDto): string;
    findAll(): Promise<import("./entities/lista.entity").Lista[]>;
    findOne(id: string): string;
    update(id: string, updateListaDto: UpdateListaDto): string;
    remove(id: string): string;
}
