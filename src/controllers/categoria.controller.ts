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
import {Categoria} from '../models';
import {CategoriaRepository} from '../repositories';

export class CategoriaController {
  constructor(
    @repository(CategoriaRepository)
    public categoriaRepository : CategoriaRepository,
  ) {}

  @post('/categorias', {
    responses: {
      '200': {
        description: 'Categoria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Categoria)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {
            title: 'NewCategoria',
            exclude: ['idcategoria'],
          }),
        },
      },
    })
    categoria: Omit<Categoria, 'idcategoria'>,
  ): Promise<Categoria> {
    return this.categoriaRepository.create(categoria);
  }

  @get('/categorias/count', {
    responses: {
      '200': {
        description: 'Categoria model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Categoria)) where?: Where<Categoria>,
  ): Promise<Count> {
    return this.categoriaRepository.count(where);
  }

  @get('/categorias', {
    responses: {
      '200': {
        description: 'Array of Categoria model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Categoria)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Categoria)) filter?: Filter<Categoria>,
  ): Promise<Categoria[]> {
    return this.categoriaRepository.find(filter);
  }

  @patch('/categorias', {
    responses: {
      '200': {
        description: 'Categoria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {partial: true}),
        },
      },
    })
    categoria: Categoria,
    @param.query.object('where', getWhereSchemaFor(Categoria)) where?: Where<Categoria>,
  ): Promise<Count> {
    return this.categoriaRepository.updateAll(categoria, where);
  }

  @get('/categorias/{id}', {
    responses: {
      '200': {
        description: 'Categoria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Categoria)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Categoria> {
    return this.categoriaRepository.findById(id);
  }

  @patch('/categorias/{id}', {
    responses: {
      '204': {
        description: 'Categoria PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {partial: true}),
        },
      },
    })
    categoria: Categoria,
  ): Promise<void> {
    await this.categoriaRepository.updateById(id, categoria);
  }

  @put('/categorias/{id}', {
    responses: {
      '204': {
        description: 'Categoria PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() categoria: Categoria,
  ): Promise<void> {
    await this.categoriaRepository.replaceById(id, categoria);
  }

  @del('/categorias/{id}', {
    responses: {
      '204': {
        description: 'Categoria DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.categoriaRepository.deleteById(id);
  }
}
