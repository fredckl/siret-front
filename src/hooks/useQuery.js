import { useLocation } from 'react-router-dom';
const qs = require('query-string');

const useQuery = () => {
  return qs.parse(useLocation().search);
}

export default useQuery;