import {DefaultCrudRepository} from '@loopback/repository';
import {Estadovuelo, EstadovueloRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EstadovueloRepository extends DefaultCrudRepository<
  Estadovuelo,
  typeof Estadovuelo.prototype.idestadovuelo,
  EstadovueloRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Estadovuelo, dataSource);
  }
}
