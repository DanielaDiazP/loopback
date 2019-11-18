import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Pasavuelo } from '../models';
import { PasavueloRepository } from '../repositories';

export class PasavueloController {
  constructor(
    @repository(PasavueloRepository)
    public pasavueloRepository: PasavueloRepository,
  ) { }

  @post('/pasavuelos', {
    responses: {
      '200': {
        description: 'Pasavuelo model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Pasavuelo) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasavuelo, {
            title: 'NewPasavuelo',
            exclude: ['idpasavuelo'],
          }),
        },
      },
    })
    pasavuelo: Omit<Pasavuelo, 'idpasavuelo'>,
  ): Promise<Pasavuelo> {
    return this.pasavueloRepository.create(pasavuelo);
  }

  @get('/pasavuelos/count', {
    responses: {
      '200': {
        description: 'Pasavuelo model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pasavuelo)) where?: Where<Pasavuelo>,
  ): Promise<Count> {
    return this.pasavueloRepository.count(where);
  }

  @get('/pasavuelos', {
    responses: {
      '200': {
        description: 'Array of Pasavuelo model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Pasavuelo) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pasavuelo)) filter?: Filter<Pasavuelo>,
  ): Promise<Pasavuelo[]> {
    return this.pasavueloRepository.find(filter);
  }

  @patch('/pasavuelos', {
    responses: {
      '200': {
        description: 'Pasavuelo PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasavuelo, { partial: true }),
        },
      },
    })
    pasavuelo: Pasavuelo,
    @param.query.object('where', getWhereSchemaFor(Pasavuelo)) where?: Where<Pasavuelo>,
  ): Promise<Count> {
    return this.pasavueloRepository.updateAll(pasavuelo, where);
  }

  @get('/pasavuelos/{id}', {
    responses: {
      '200': {
        description: 'Pasavuelo model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Pasavuelo) } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Pasavuelo> {
    return this.pasavueloRepository.findById(id);
  }

  @patch('/pasavuelos/{id}', {
    responses: {
      '204': {
        description: 'Pasavuelo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasavuelo, { partial: true }),
        },
      },
    })
    pasavuelo: Pasavuelo,
  ): Promise<void> {
    await this.pasavueloRepository.updateById(id, pasavuelo);
  }

  @put('/pasavuelos/{id}', {
    responses: {
      '204': {
        description: 'Pasavuelo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pasavuelo: Pasavuelo,
  ): Promise<void> {
    await this.pasavueloRepository.replaceById(id, pasavuelo);
  }

  @del('/pasavuelos/{id}', {
    responses: {
      '204': {
        description: 'Pasavuelo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pasavueloRepository.deleteById(id);
  }
}
