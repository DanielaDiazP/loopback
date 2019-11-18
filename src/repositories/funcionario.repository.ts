import {DefaultCrudRepository} from '@loopback/repository';
import {Funcionario, FuncionarioRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FuncionarioRepository extends DefaultCrudRepository<
  Funcionario,
  typeof Funcionario.prototype.idfuncionario,
  FuncionarioRelations
> {
  constructor(
    @inject('datasources.mysqldb') dataSource: MysqldbDataSource,
  ) {
    super(Funcionario, dataSource);
  }
}
