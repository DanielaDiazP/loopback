import {DefaultCrudRepository} from '@loopback/repository';
import {Municipio, MunicipioRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MunicipioRepository extends DefaultCrudRepository<
  Municipio,
  typeof Municipio.prototype.idmunicipio,
  MunicipioRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Municipio, dataSource);
  }
}
