import { Injectable } from '@nestjs/common';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
import { Repository } from 'typeorm';
import { Lista } from './entities/lista.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListaService {

  constructor(@InjectRepository(Lista)
    private readonly listaRepository:Repository<Lista>){
  }
  create(createListaDto: CreateListaDto) {
    return 'This action adds a new lista';
  }

  async findAll() {
    return await this.listaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lista`;
  }

  update(id: number, updateListaDto: UpdateListaDto) {
    return `This action updates a #${id} lista`;
  }

  remove(id: number) {
    return `This action removes a #${id} lista`;
  }
}
