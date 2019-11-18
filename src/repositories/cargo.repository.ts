import {DefaultCrudRepository} from '@loopback/repository';
import {Cargo, CargoRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CargoRepository extends DefaultCrudRepository<
  Cargo,
  typeof Cargo.prototype.idcargo,
  CargoRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Cargo, dataSource);
  }
}
