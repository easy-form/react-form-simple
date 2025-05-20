import { isMeaningful } from 'react-form-simple/utils/util';

export class ValidMethods {
  public static required(value: any) {
    if (Array.isArray(value)) {
      return value.length !== 0;
    }
    return isMeaningful(value);
  }
}
