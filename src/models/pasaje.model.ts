import {Entity, model, property} from '@loopback/repository';

@model()
export class Pasaje extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idpasaje?: number;

  @property({
    type: 'number',
    required: true,
  })
  idpasajero: number;

  @property({
    type: 'number',
    required: true,
  })
  codigovuelo: number;

  @property({
    type: 'date',
    required: true,
  })
  horas: string;

  @property({
    type: 'number',
    required: true,
  })
  numpuesto: number;

  @property({
    type: 'boolean',
    required: true,
  })
  reserva: boolean;

  @property({
    type: 'number',
    required: true,
  })
  tipopasaje: number;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;


  constructor(data?: Partial<Pasaje>) {
    super(data);
  }
}

export interface PasajeRelations {
  // describe navigational properties here
}

export type PasajeWithRelations = Pasaje & PasajeRelations;
