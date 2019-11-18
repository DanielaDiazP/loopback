import {DefaultCrudRepository} from '@loopback/repository';
import {Avion, AvionRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AvionRepository extends DefaultCrudRepository<
  Avion,
  typeof Avion.prototype.idavion,
  AvionRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Avion, dataSource);
  }
}
