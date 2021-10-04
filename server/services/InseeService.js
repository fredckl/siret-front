import { env } from '../helpers/env';
import Fetch from './Fetch';

class InseeService extends Fetch {
  getSiret(url, options = {}) {
    return this.getJson(
    `${env('SIRET_PROXY_URL')}/api/v1/siret?${(url)}`,
    options
    );
  }
}

export default new InseeService();
