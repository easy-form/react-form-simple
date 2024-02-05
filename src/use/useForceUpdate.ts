import { useState } from 'react';

export default function useForceUpdate() {
  const [, setState] = useState({});
  const forceUpdate = () => {
    setState({});
  };
  return forceUpdate;
}
