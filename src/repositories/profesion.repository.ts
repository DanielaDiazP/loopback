import {DefaultCrudRepository} from '@loopback/repository';
import {Profesion, ProfesionRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProfesionRepository extends DefaultCrudRepository<
  Profesion,
  typeof Profesion.prototype.idprofesion,
  ProfesionRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Profesion, dataSource);
  }
}
