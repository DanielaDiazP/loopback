import {Entity, model, property} from '@loopback/repository';

@model()
export class Ruta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idruta?: number;

  @property({
    type: 'number',
    required: true,
  })
  destino: number;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'number',
    required: true,
  })
  origen: number;


  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;
