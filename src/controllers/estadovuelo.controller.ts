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
import {Estadovuelo} from '../models';
import {EstadovueloRepository} from '../repositories';

export class EstadovueloController {
  constructor(
    @repository(EstadovueloRepository)
    public estadovueloRepository : EstadovueloRepository,
  ) {}

  @post('/estadovuelos', {
    responses: {
      '200': {
        description: 'Estadovuelo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Estadovuelo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadovuelo, {
            title: 'NewEstadovuelo',
            exclude: ['idestadovuelo'],
          }),
        },
      },
    })
    estadovuelo: Omit<Estadovuelo, 'idestadovuelo'>,
  ): Promise<Estadovuelo> {
    return this.estadovueloRepository.create(estadovuelo);
  }

  @get('/estadovuelos/count', {
    responses: {
      '200': {
        description: 'Estadovuelo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Estadovuelo)) where?: Where<Estadovuelo>,
  ): Promise<Count> {
    return this.estadovueloRepository.count(where);
  }

  @get('/estadovuelos', {
    responses: {
      '200': {
        description: 'Array of Estadovuelo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estadovuelo)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Estadovuelo)) filter?: Filter<Estadovuelo>,
  ): Promise<Estadovuelo[]> {
    return this.estadovueloRepository.find(filter);
  }

  @patch('/estadovuelos', {
    responses: {
      '200': {
        description: 'Estadovuelo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadovuelo, {partial: true}),
        },
      },
    })
    estadovuelo: Estadovuelo,
    @param.query.object('where', getWhereSchemaFor(Estadovuelo)) where?: Where<Estadovuelo>,
  ): Promise<Count> {
    return this.estadovueloRepository.updateAll(estadovuelo, where);
  }

  @get('/estadovuelos/{id}', {
    responses: {
      '200': {
        description: 'Estadovuelo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Estadovuelo)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Estadovuelo> {
    return this.estadovueloRepository.findById(id);
  }

  @patch('/estadovuelos/{id}', {
    responses: {
      '204': {
        description: 'Estadovuelo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadovuelo, {partial: true}),
        },
      },
    })
    estadovuelo: Estadovuelo,
  ): Promise<void> {
    await this.estadovueloRepository.updateById(id, estadovuelo);
  }

  @put('/estadovuelos/{id}', {
    responses: {
      '204': {
        description: 'Estadovuelo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estadovuelo: Estadovuelo,
  ): Promise<void> {
    await this.estadovueloRepository.replaceById(id, estadovuelo);
  }

  @del('/estadovuelos/{id}', {
    responses: {
      '204': {
        description: 'Estadovuelo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estadovueloRepository.deleteById(id);
  }
}
