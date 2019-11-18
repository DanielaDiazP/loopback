import {Entity, model, property} from '@loopback/repository';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idvuelo?: number;

  @property({
    type: 'number',
    required: true,
  })
  idavion: number;

  @property({
    type: 'number',
    required: true,
  })
  idruta: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  estadovuelo: number;


  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
