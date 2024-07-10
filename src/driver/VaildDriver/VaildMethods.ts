import { isMeaningful } from 'react-form-simple/utils/util';

export class VaildMethods {
  public static required(value: any) {
    if (Array.isArray(value)) {
      return value.length !== 0;
    }
    return isMeaningful(value);
  }
}
