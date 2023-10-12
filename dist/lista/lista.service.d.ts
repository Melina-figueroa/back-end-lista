import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
import { Repository } from 'typeorm';
import { Lista } from './entities/lista.entity';
export declare class ListaService {
    private readonly listaRepository;
    constructor(listaRepository: Repository<Lista>);
    create(createListaDto: CreateListaDto): string;
    findAll(): Promise<Lista[]>;
    findOne(id: number): string;
    update(id: number, updateListaDto: UpdateListaDto): string;
    remove(id: number): string;
}
