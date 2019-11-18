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
import {Pais} from '../models';
import {PaisRepository} from '../repositories';

export class PaisController {
  constructor(
    @repository(PaisRepository)
    public paisRepository : PaisRepository,
  ) {}

  @post('/pais', {
    responses: {
      '200': {
        description: 'Pais model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pais)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pais, {
            title: 'NewPais',
            exclude: ['idPais'],
          }),
        },
      },
    })
    pais: Omit<Pais, 'idPais'>,
  ): Promise<Pais> {
    return this.paisRepository.create(pais);
  }

  @get('/pais/count', {
    responses: {
      '200': {
        description: 'Pais model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pais)) where?: Where<Pais>,
  ): Promise<Count> {
    return this.paisRepository.count(where);
  }

  @get('/pais', {
    responses: {
      '200': {
        description: 'Array of Pais model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pais)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pais)) filter?: Filter<Pais>,
  ): Promise<Pais[]> {
    return this.paisRepository.find(filter);
  }

  @patch('/pais', {
    responses: {
      '200': {
        description: 'Pais PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pais, {partial: true}),
        },
      },
    })
    pais: Pais,
    @param.query.object('where', getWhereSchemaFor(Pais)) where?: Where<Pais>,
  ): Promise<Count> {
    return this.paisRepository.updateAll(pais, where);
  }

  @get('/pais/{id}', {
    responses: {
      '200': {
        description: 'Pais model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pais)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Pais> {
    return this.paisRepository.findById(id);
  }

  @patch('/pais/{id}', {
    responses: {
      '204': {
        description: 'Pais PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pais, {partial: true}),
        },
      },
    })
    pais: Pais,
  ): Promise<void> {
    await this.paisRepository.updateById(id, pais);
  }

  @put('/pais/{id}', {
    responses: {
      '204': {
        description: 'Pais PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pais: Pais,
  ): Promise<void> {
    await this.paisRepository.replaceById(id, pais);
  }

  @del('/pais/{id}', {
    responses: {
      '204': {
        description: 'Pais DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.paisRepository.deleteById(id);
  }
}
