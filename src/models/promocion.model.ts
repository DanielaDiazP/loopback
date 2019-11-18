import {Entity, model, property} from '@loopback/repository';

@model()
export class Promocion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idpromocion?: number;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  rutas: number;


  constructor(data?: Partial<Promocion>) {
    super(data);
  }
}

export interface PromocionRelations {
  // describe navigational properties here
}

export type PromocionWithRelations = Promocion & PromocionRelations;
