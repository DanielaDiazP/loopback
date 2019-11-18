import {Entity, model, property} from '@loopback/repository';

@model()
export class Funcionario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idfuncionario?: number;

  @property({
    type: 'number',
    required: true,
  })
  idpersona: number;

  @property({
    type: 'number',
    required: true,
  })
  idcargo: number;


  constructor(data?: Partial<Funcionario>) {
    super(data);
  }
}

export interface FuncionarioRelations {
  // describe navigational properties here
}

export type FuncionarioWithRelations = Funcionario & FuncionarioRelations;
