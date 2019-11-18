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
import {Municipio} from '../models';
import {MunicipioRepository} from '../repositories';

export class MunicipioController {
  constructor(
    @repository(MunicipioRepository)
    public municipioRepository : MunicipioRepository,
  ) {}

  @post('/municipios', {
    responses: {
      '200': {
        description: 'Municipio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Municipio)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Municipio, {
            title: 'NewMunicipio',
            exclude: ['idmunicipio'],
          }),
        },
      },
    })
    municipio: Omit<Municipio, 'idmunicipio'>,
  ): Promise<Municipio> {
    return this.municipioRepository.create(municipio);
  }

  @get('/municipios/count', {
    responses: {
      '200': {
        description: 'Municipio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Municipio)) where?: Where<Municipio>,
  ): Promise<Count> {
    return this.municipioRepository.count(where);
  }

  @get('/municipios', {
    responses: {
      '200': {
        description: 'Array of Municipio model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Municipio)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Municipio)) filter?: Filter<Municipio>,
  ): Promise<Municipio[]> {
    return this.municipioRepository.find(filter);
  }

  @patch('/municipios', {
    responses: {
      '200': {
        description: 'Municipio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Municipio, {partial: true}),
        },
      },
    })
    municipio: Municipio,
    @param.query.object('where', getWhereSchemaFor(Municipio)) where?: Where<Municipio>,
  ): Promise<Count> {
    return this.municipioRepository.updateAll(municipio, where);
  }

  @get('/municipios/{id}', {
    responses: {
      '200': {
        description: 'Municipio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Municipio)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Municipio> {
    return this.municipioRepository.findById(id);
  }

  @patch('/municipios/{id}', {
    responses: {
      '204': {
        description: 'Municipio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Municipio, {partial: true}),
        },
      },
    })
    municipio: Municipio,
  ): Promise<void> {
    await this.municipioRepository.updateById(id, municipio);
  }

  @put('/municipios/{id}', {
    responses: {
      '204': {
        description: 'Municipio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() municipio: Municipio,
  ): Promise<void> {
    await this.municipioRepository.replaceById(id, municipio);
  }

  @del('/municipios/{id}', {
    responses: {
      '204': {
        description: 'Municipio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.municipioRepository.deleteById(id);
  }
}
