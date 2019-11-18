import {Entity, model, property} from '@loopback/repository';

@model()
export class Profesionfuncio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idprofesionfuncion?: number;

  @property({
    type: 'number',
    required: true,
  })
  idprofesion: number;

  @property({
    type: 'number',
    required: true,
  })
  idfuncionario: number;


  constructor(data?: Partial<Profesionfuncio>) {
    super(data);
  }
}

export interface ProfesionfuncioRelations {
  // describe navigational properties here
}

export type ProfesionfuncioWithRelations = Profesionfuncio & ProfesionfuncioRelations;
