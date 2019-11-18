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
import {Pasaje} from '../models';
import {PasajeRepository} from '../repositories';

export class PasajeController {
  constructor(
    @repository(PasajeRepository)
    public pasajeRepository : PasajeRepository,
  ) {}

  @post('/pasajes', {
    responses: {
      '200': {
        description: 'Pasaje model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pasaje)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasaje, {
            title: 'NewPasaje',
            exclude: ['idpasaje'],
          }),
        },
      },
    })
    pasaje: Omit<Pasaje, 'idpasaje'>,
  ): Promise<Pasaje> {
    return this.pasajeRepository.create(pasaje);
  }

  @get('/pasajes/count', {
    responses: {
      '200': {
        description: 'Pasaje model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pasaje)) where?: Where<Pasaje>,
  ): Promise<Count> {
    return this.pasajeRepository.count(where);
  }

  @get('/pasajes', {
    responses: {
      '200': {
        description: 'Array of Pasaje model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pasaje)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pasaje)) filter?: Filter<Pasaje>,
  ): Promise<Pasaje[]> {
    return this.pasajeRepository.find(filter);
  }

  @patch('/pasajes', {
    responses: {
      '200': {
        description: 'Pasaje PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasaje, {partial: true}),
        },
      },
    })
    pasaje: Pasaje,
    @param.query.object('where', getWhereSchemaFor(Pasaje)) where?: Where<Pasaje>,
  ): Promise<Count> {
    return this.pasajeRepository.updateAll(pasaje, where);
  }

  @get('/pasajes/{id}', {
    responses: {
      '200': {
        description: 'Pasaje model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pasaje)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Pasaje> {
    return this.pasajeRepository.findById(id);
  }

  @patch('/pasajes/{id}', {
    responses: {
      '204': {
        description: 'Pasaje PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pasaje, {partial: true}),
        },
      },
    })
    pasaje: Pasaje,
  ): Promise<void> {
    await this.pasajeRepository.updateById(id, pasaje);
  }

  @put('/pasajes/{id}', {
    responses: {
      '204': {
        description: 'Pasaje PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pasaje: Pasaje,
  ): Promise<void> {
    await this.pasajeRepository.replaceById(id, pasaje);
  }

  @del('/pasajes/{id}', {
    responses: {
      '204': {
        description: 'Pasaje DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pasajeRepository.deleteById(id);
  }
}
