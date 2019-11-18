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
import {Profesion} from '../models';
import {ProfesionRepository} from '../repositories';

export class ProfesionController {
  constructor(
    @repository(ProfesionRepository)
    public profesionRepository : ProfesionRepository,
  ) {}

  @post('/profesions', {
    responses: {
      '200': {
        description: 'Profesion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Profesion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesion, {
            title: 'NewProfesion',
            exclude: ['idprofesion'],
          }),
        },
      },
    })
    profesion: Omit<Profesion, 'idprofesion'>,
  ): Promise<Profesion> {
    return this.profesionRepository.create(profesion);
  }

  @get('/profesions/count', {
    responses: {
      '200': {
        description: 'Profesion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Profesion)) where?: Where<Profesion>,
  ): Promise<Count> {
    return this.profesionRepository.count(where);
  }

  @get('/profesions', {
    responses: {
      '200': {
        description: 'Array of Profesion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Profesion)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Profesion)) filter?: Filter<Profesion>,
  ): Promise<Profesion[]> {
    return this.profesionRepository.find(filter);
  }

  @patch('/profesions', {
    responses: {
      '200': {
        description: 'Profesion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesion, {partial: true}),
        },
      },
    })
    profesion: Profesion,
    @param.query.object('where', getWhereSchemaFor(Profesion)) where?: Where<Profesion>,
  ): Promise<Count> {
    return this.profesionRepository.updateAll(profesion, where);
  }

  @get('/profesions/{id}', {
    responses: {
      '200': {
        description: 'Profesion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Profesion)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Profesion> {
    return this.profesionRepository.findById(id);
  }

  @patch('/profesions/{id}', {
    responses: {
      '204': {
        description: 'Profesion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profesion, {partial: true}),
        },
      },
    })
    profesion: Profesion,
  ): Promise<void> {
    await this.profesionRepository.updateById(id, profesion);
  }

  @put('/profesions/{id}', {
    responses: {
      '204': {
        description: 'Profesion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() profesion: Profesion,
  ): Promise<void> {
    await this.profesionRepository.replaceById(id, profesion);
  }

  @del('/profesions/{id}', {
    responses: {
      '204': {
        description: 'Profesion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.profesionRepository.deleteById(id);
  }
}
