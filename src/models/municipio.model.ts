import {Entity, model, property} from '@loopback/repository';

@model()
export class Municipio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idmunicipio?: number;

  @property({
    type: 'string',
    required: true,
  })
  municipio: string;

  @property({
    type: 'number',
    required: true,
  })
  departamento: number;

  @property({
    type: 'number',
    required: true,
  })
  aeropuerto: number;


  constructor(data?: Partial<Municipio>) {
    super(data);
  }
}

export interface MunicipioRelations {
  // describe navigational properties here
}

export type MunicipioWithRelations = Municipio & MunicipioRelations;
