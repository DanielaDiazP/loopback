import {DefaultCrudRepository} from '@loopback/repository';
import {Pais, PaisRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PaisRepository extends DefaultCrudRepository<
  Pais,
  typeof Pais.prototype.idPais,
  PaisRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Pais, dataSource);
  }
}
