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
import {Cargo} from '../models';
import {CargoRepository} from '../repositories';

export class CargoController {
  constructor(
    @repository(CargoRepository)
    public cargoRepository : CargoRepository,
  ) {}

  @post('/cargos', {
    responses: {
      '200': {
        description: 'Cargo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cargo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cargo, {
            title: 'NewCargo',
            exclude: ['idcargo'],
          }),
        },
      },
    })
    cargo: Omit<Cargo, 'idcargo'>,
  ): Promise<Cargo> {
    return this.cargoRepository.create(cargo);
  }

  @get('/cargos/count', {
    responses: {
      '200': {
        description: 'Cargo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cargo)) where?: Where<Cargo>,
  ): Promise<Count> {
    return this.cargoRepository.count(where);
  }

  @get('/cargos', {
    responses: {
      '200': {
        description: 'Array of Cargo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cargo)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Cargo)) filter?: Filter<Cargo>,
  ): Promise<Cargo[]> {
    return this.cargoRepository.find(filter);
  }

  @patch('/cargos', {
    responses: {
      '200': {
        description: 'Cargo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cargo, {partial: true}),
        },
      },
    })
    cargo: Cargo,
    @param.query.object('where', getWhereSchemaFor(Cargo)) where?: Where<Cargo>,
  ): Promise<Count> {
    return this.cargoRepository.updateAll(cargo, where);
  }

  @get('/cargos/{id}', {
    responses: {
      '200': {
        description: 'Cargo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cargo)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Cargo> {
    return this.cargoRepository.findById(id);
  }

  @patch('/cargos/{id}', {
    responses: {
      '204': {
        description: 'Cargo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cargo, {partial: true}),
        },
      },
    })
    cargo: Cargo,
  ): Promise<void> {
    await this.cargoRepository.updateById(id, cargo);
  }

  @put('/cargos/{id}', {
    responses: {
      '204': {
        description: 'Cargo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cargo: Cargo,
  ): Promise<void> {
    await this.cargoRepository.replaceById(id, cargo);
  }

  @del('/cargos/{id}', {
    responses: {
      '204': {
        description: 'Cargo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cargoRepository.deleteById(id);
  }
}
