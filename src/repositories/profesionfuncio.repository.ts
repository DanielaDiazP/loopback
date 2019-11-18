import {DefaultCrudRepository} from '@loopback/repository';
import {Profesionfuncio, ProfesionfuncioRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProfesionfuncioRepository extends DefaultCrudRepository<
  Profesionfuncio,
  typeof Profesionfuncio.prototype.idprofesionfuncion,
  ProfesionfuncioRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Profesionfuncio, dataSource);
  }
}
