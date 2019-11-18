import {Entity, model, property} from '@loopback/repository';

@model()
export class Cargo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idcargo?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Cargo>) {
    super(data);
  }
}

export interface CargoRelations {
  // describe navigational properties here
}

export type CargoWithRelations = Cargo & CargoRelations;
