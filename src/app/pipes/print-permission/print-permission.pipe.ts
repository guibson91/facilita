import { Pipe, PipeTransform } from '@angular/core';
import { Permission, PermissionType } from '../../../models/user';
import { elementIsInsideArray } from '../../util/util';

@Pipe({
  name: 'printPermission',
})
export class PrintPermissionPipe implements PipeTransform {

  transform(value: PermissionType[]) {
    value = value || [];
    let permissionString: string = "";

    if (elementIsInsideArray(Permission.COMPANY_MANAGEMENT, value)) {
      permissionString = "Gerente Geral"
    } else if (elementIsInsideArray(Permission.FILIAL_MANAGEMENT, value)) {
      permissionString = "Gerente de Filial"
    } else if (elementIsInsideArray(Permission.CUSTOMER, value)) {
      permissionString = "Cliente"
    } else if (elementIsInsideArray(Permission.ORDER, value) || elementIsInsideArray(Permission.ORDER_READ, value)) {
      permissionString = "Caixa"
    } else if (elementIsInsideArray(Permission.TEAM, value)) {
      permissionString = "Administrador"
    }

    return permissionString;
  }

}