"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const lista_entity_1 = require("./entities/lista.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ListaService = class ListaService {
    constructor(listaRepository) {
        this.listaRepository = listaRepository;
    }
    create(createListaDto) {
        return 'This action adds a new lista';
    }
    async findAll() {
        return await this.listaRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} lista`;
    }
    update(id, updateListaDto) {
        return `This action updates a #${id} lista`;
    }
    remove(id) {
        return `This action removes a #${id} lista`;
    }
};
exports.ListaService = ListaService;
exports.ListaService = ListaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(lista_entity_1.Lista)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ListaService);
//# sourceMappingURL=lista.service.js.map