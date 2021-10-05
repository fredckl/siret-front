import { env } from '../helpers/env';
import Fetch from './Fetch';

class InseeService extends Fetch {
  getSiret(queries, options = {}) {
    return this.getJson(
    `${env('SIRET_PROXY_URL')}/api/v1/siret?${(queries)}`,
    options
    );
  }

  getSiretBySiren(siren, options = {}) {
    return this.getJson(
    `${env('SIRET_PROXY_URL')}/api/v1/siret/${siren}`,
    options
    );
  }
}

export default new InseeService();
