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
import {Marca} from '../models';
import {MarcaRepository} from '../repositories';

export class MarcaController {
  constructor(
    @repository(MarcaRepository)
    public marcaRepository : MarcaRepository,
  ) {}

  @post('/marcas', {
    responses: {
      '200': {
        description: 'Marca model instance',
        content: {'application/json': {schema: getModelSchemaRef(Marca)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Marca, {
            title: 'NewMarca',
            exclude: ['idmarca'],
          }),
        },
      },
    })
    marca: Omit<Marca, 'idmarca'>,
  ): Promise<Marca> {
    return this.marcaRepository.create(marca);
  }

  @get('/marcas/count', {
    responses: {
      '200': {
        description: 'Marca model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Marca)) where?: Where<Marca>,
  ): Promise<Count> {
    return this.marcaRepository.count(where);
  }

  @get('/marcas', {
    responses: {
      '200': {
        description: 'Array of Marca model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Marca)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Marca)) filter?: Filter<Marca>,
  ): Promise<Marca[]> {
    return this.marcaRepository.find(filter);
  }

  @patch('/marcas', {
    responses: {
      '200': {
        description: 'Marca PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Marca, {partial: true}),
        },
      },
    })
    marca: Marca,
    @param.query.object('where', getWhereSchemaFor(Marca)) where?: Where<Marca>,
  ): Promise<Count> {
    return this.marcaRepository.updateAll(marca, where);
  }

  @get('/marcas/{id}', {
    responses: {
      '200': {
        description: 'Marca model instance',
        content: {'application/json': {schema: getModelSchemaRef(Marca)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Marca> {
    return this.marcaRepository.findById(id);
  }

  @patch('/marcas/{id}', {
    responses: {
      '204': {
        description: 'Marca PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Marca, {partial: true}),
        },
      },
    })
    marca: Marca,
  ): Promise<void> {
    await this.marcaRepository.updateById(id, marca);
  }

  @put('/marcas/{id}', {
    responses: {
      '204': {
        description: 'Marca PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() marca: Marca,
  ): Promise<void> {
    await this.marcaRepository.replaceById(id, marca);
  }

  @del('/marcas/{id}', {
    responses: {
      '204': {
        description: 'Marca DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.marcaRepository.deleteById(id);
  }
}
