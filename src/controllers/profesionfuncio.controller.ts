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
import {Profesionfuncio} from '../models';
import {ProfesionfuncioRepository} from '../repositories';

export class ProfesionfuncioController {
  constructor(
    @repository(ProfesionfuncioRepository)
    public profesionfuncioRepository : ProfesionfuncioRepository,
  ) {}

  @post('/profesionfuncios', {
    responses: {
      '200': {
        description: 'Profesionfuncio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Profesionfuncio)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesionfuncio, {
            title: 'NewProfesionfuncio',
            exclude: ['idprofesionfuncion'],
          }),
        },
      },
    })
    profesionfuncio: Omit<Profesionfuncio, 'idprofesionfuncion'>,
  ): Promise<Profesionfuncio> {
    return this.profesionfuncioRepository.create(profesionfuncio);
  }

  @get('/profesionfuncios/count', {
    responses: {
      '200': {
        description: 'Profesionfuncio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Profesionfuncio)) where?: Where<Profesionfuncio>,
  ): Promise<Count> {
    return this.profesionfuncioRepository.count(where);
  }

  @get('/profesionfuncios', {
    responses: {
      '200': {
        description: 'Array of Profesionfuncio model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Profesionfuncio)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Profesionfuncio)) filter?: Filter<Profesionfuncio>,
  ): Promise<Profesionfuncio[]> {
    return this.profesionfuncioRepository.find(filter);
  }

  @patch('/profesionfuncios', {
    responses: {
      '200': {
        description: 'Profesionfuncio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesionfuncio, {partial: true}),
        },
      },
    })
    profesionfuncio: Profesionfuncio,
    @param.query.object('where', getWhereSchemaFor(Profesionfuncio)) where?: Where<Profesionfuncio>,
  ): Promise<Count> {
    return this.profesionfuncioRepository.updateAll(profesionfuncio, where);
  }

  @get('/profesionfuncios/{id}', {
    responses: {
      '200': {
        description: 'Profesionfuncio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Profesionfuncio)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Profesionfuncio> {
    return this.profesionfuncioRepository.findById(id);
  }

  @patch('/profesionfuncios/{id}', {
    responses: {
      '204': {
        description: 'Profesionfuncio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesionfuncio, {partial: true}),
        },
      },
    })
    profesionfuncio: Profesionfuncio,
  ): Promise<void> {
    await this.profesionfuncioRepository.updateById(id, profesionfuncio);
  }

  @put('/profesionfuncios/{id}', {
    responses: {
      '204': {
        description: 'Profesionfuncio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() profesionfuncio: Profesionfuncio,
  ): Promise<void> {
    await this.profesionfuncioRepository.replaceById(id, profesionfuncio);
  }

  @del('/profesionfuncios/{id}', {
    responses: {
      '204': {
        description: 'Profesionfuncio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.profesionfuncioRepository.deleteById(id);
  }
}
