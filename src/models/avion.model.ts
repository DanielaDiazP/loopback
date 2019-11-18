import {Entity, model, property} from '@loopback/repository';

@model()
export class Avion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idavion?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  marca: number;

  @property({
    type: 'number',
    required: true,
  })
  capacidad: number;

  @property({
    type: 'number',
    required: true,
  })
  piloto: number;

  @property({
    type: 'number',
    required: true,
  })
  copiloto: number;


  constructor(data?: Partial<Avion>) {
    super(data);
  }
}

export interface AvionRelations {
  // describe navigational properties here
}

export type AvionWithRelations = Avion & AvionRelations;
