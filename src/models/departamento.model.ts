import {Entity, model, property} from '@loopback/repository';

@model()
export class Departamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  iddepartamento?: number;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'number',
    required: true,
  })
  idpais: number;


  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
