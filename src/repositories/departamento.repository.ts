import {DefaultCrudRepository} from '@loopback/repository';
import {Departamento, DepartamentoRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DepartamentoRepository extends DefaultCrudRepository<
  Departamento,
  typeof Departamento.prototype.iddepartamento,
  DepartamentoRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Departamento, dataSource);
  }
}
