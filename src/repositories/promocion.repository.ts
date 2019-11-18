import {DefaultCrudRepository} from '@loopback/repository';
import {Promocion, PromocionRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PromocionRepository extends DefaultCrudRepository<
  Promocion,
  typeof Promocion.prototype.idpromocion,
  PromocionRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Promocion, dataSource);
  }
}
