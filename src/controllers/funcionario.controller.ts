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
import {Funcionario} from '../models';
import {FuncionarioRepository} from '../repositories';

export class FuncionarioController {
  constructor(
    @repository(FuncionarioRepository)
    public funcionarioRepository : FuncionarioRepository,
  ) {}

  @post('/funcionarios', {
    responses: {
      '200': {
        description: 'Funcionario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Funcionario)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funcionario, {
            title: 'NewFuncionario',
            exclude: ['idfuncionario'],
          }),
        },
      },
    })
    funcionario: Omit<Funcionario, 'idfuncionario'>,
  ): Promise<Funcionario> {
    return this.funcionarioRepository.create(funcionario);
  }

  @get('/funcionarios/count', {
    responses: {
      '200': {
        description: 'Funcionario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Funcionario)) where?: Where<Funcionario>,
  ): Promise<Count> {
    return this.funcionarioRepository.count(where);
  }

  @get('/funcionarios', {
    responses: {
      '200': {
        description: 'Array of Funcionario model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Funcionario)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Funcionario)) filter?: Filter<Funcionario>,
  ): Promise<Funcionario[]> {
    return this.funcionarioRepository.find(filter);
  }

  @patch('/funcionarios', {
    responses: {
      '200': {
        description: 'Funcionario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funcionario, {partial: true}),
        },
      },
    })
    funcionario: Funcionario,
    @param.query.object('where', getWhereSchemaFor(Funcionario)) where?: Where<Funcionario>,
  ): Promise<Count> {
    return this.funcionarioRepository.updateAll(funcionario, where);
  }

  @get('/funcionarios/{id}', {
    responses: {
      '200': {
        description: 'Funcionario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Funcionario)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Funcionario> {
    return this.funcionarioRepository.findById(id);
  }

  @patch('/funcionarios/{id}', {
    responses: {
      '204': {
        description: 'Funcionario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funcionario, {partial: true}),
        },
      },
    })
    funcionario: Funcionario,
  ): Promise<void> {
    await this.funcionarioRepository.updateById(id, funcionario);
  }

  @put('/funcionarios/{id}', {
    responses: {
      '204': {
        description: 'Funcionario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() funcionario: Funcionario,
  ): Promise<void> {
    await this.funcionarioRepository.replaceById(id, funcionario);
  }

  @del('/funcionarios/{id}', {
    responses: {
      '204': {
        description: 'Funcionario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.funcionarioRepository.deleteById(id);
  }
}
