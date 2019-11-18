import {DefaultCrudRepository} from '@loopback/repository';
import {Marca, MarcaRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MarcaRepository extends DefaultCrudRepository<
  Marca,
  typeof Marca.prototype.idmarca,
  MarcaRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Marca, dataSource);
  }
}
