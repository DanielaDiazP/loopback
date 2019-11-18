import {Entity, model, property} from '@loopback/repository';

@model()
export class Estadovuelo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idestadovuelo?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Estadovuelo>) {
    super(data);
  }
}

export interface EstadovueloRelations {
  // describe navigational properties here
}

export type EstadovueloWithRelations = Estadovuelo & EstadovueloRelations;
