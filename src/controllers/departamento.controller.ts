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
import {Departamento} from '../models';
import {DepartamentoRepository} from '../repositories';

export class DepartamentoController {
  constructor(
    @repository(DepartamentoRepository)
    public departamentoRepository : DepartamentoRepository,
  ) {}

  @post('/departamentos', {
    responses: {
      '200': {
        description: 'Departamento model instance',
        content: {'application/json': {schema: getModelSchemaRef(Departamento)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departamento, {
            title: 'NewDepartamento',
            exclude: ['iddepartamento'],
          }),
        },
      },
    })
    departamento: Omit<Departamento, 'iddepartamento'>,
  ): Promise<Departamento> {
    return this.departamentoRepository.create(departamento);
  }

  @get('/departamentos/count', {
    responses: {
      '200': {
        description: 'Departamento model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Departamento)) where?: Where<Departamento>,
  ): Promise<Count> {
    return this.departamentoRepository.count(where);
  }

  @get('/departamentos', {
    responses: {
      '200': {
        description: 'Array of Departamento model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Departamento)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Departamento)) filter?: Filter<Departamento>,
  ): Promise<Departamento[]> {
    return this.departamentoRepository.find(filter);
  }

  @patch('/departamentos', {
    responses: {
      '200': {
        description: 'Departamento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departamento, {partial: true}),
        },
      },
    })
    departamento: Departamento,
    @param.query.object('where', getWhereSchemaFor(Departamento)) where?: Where<Departamento>,
  ): Promise<Count> {
    return this.departamentoRepository.updateAll(departamento, where);
  }

  @get('/departamentos/{id}', {
    responses: {
      '200': {
        description: 'Departamento model instance',
        content: {'application/json': {schema: getModelSchemaRef(Departamento)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Departamento> {
    return this.departamentoRepository.findById(id);
  }

  @patch('/departamentos/{id}', {
    responses: {
      '204': {
        description: 'Departamento PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departamento, {partial: true}),
        },
      },
    })
    departamento: Departamento,
  ): Promise<void> {
    await this.departamentoRepository.updateById(id, departamento);
  }

  @put('/departamentos/{id}', {
    responses: {
      '204': {
        description: 'Departamento PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() departamento: Departamento,
  ): Promise<void> {
    await this.departamentoRepository.replaceById(id, departamento);
  }

  @del('/departamentos/{id}', {
    responses: {
      '204': {
        description: 'Departamento DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.departamentoRepository.deleteById(id);
  }
}
