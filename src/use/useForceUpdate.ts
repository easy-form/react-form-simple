import { useState } from 'react';

export default function useForceUpdate() {
  const [, setState] = useState({});
  const forceUpdate = (delay: boolean = true) => {
    if (delay) {
      setTimeout(() => {
        setState({});
      });
    } else {
      setState({});
    }
  };
  return forceUpdate;
}
