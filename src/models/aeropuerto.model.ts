import {Entity, model, property} from '@loopback/repository';

@model()
export class Aeropuerto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idaeropuerto?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<Aeropuerto>) {
    super(data);
  }
}

export interface AeropuertoRelations {
  // describe navigational properties here
}

export type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
