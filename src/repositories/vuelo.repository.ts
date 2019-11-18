import {DefaultCrudRepository} from '@loopback/repository';
import {Vuelo, VueloRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VueloRepository extends DefaultCrudRepository<
  Vuelo,
  typeof Vuelo.prototype.idvuelo,
  VueloRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Vuelo, dataSource);
  }
}
