import {Entity, model, property} from '@loopback/repository';

@model()
export class Pasajero extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idpasajero?: number;

  @property({
    type: 'number',
    required: true,
  })
  personas: number;


  constructor(data?: Partial<Pasajero>) {
    super(data);
  }
}

export interface PasajeroRelations {
  // describe navigational properties here
}

export type PasajeroWithRelations = Pasajero & PasajeroRelations;
