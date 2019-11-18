import {Entity, model, property} from '@loopback/repository';

@model()
export class Pasavuelo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idpasavuelo?: number;

  @property({
    type: 'number',
    required: true,
  })
  vuelos: number;

  @property({
    type: 'number',
    required: true,
  })
  pasajeros: number;


  constructor(data?: Partial<Pasavuelo>) {
    super(data);
  }
}

export interface PasavueloRelations {
  // describe navigational properties here
}

export type PasavueloWithRelations = Pasavuelo & PasavueloRelations;
