import React, { useContext } from 'react';
import type { GlobalProps } from 'react-form-simple/types/form';

export type DataProvideProps = {
  providerValue: GlobalProps.FormItemProps;
  children?: React.ReactNode;
};

const DataContext = React.createContext(
  {} as DataProvideProps['providerValue'],
);

export const useDataContext = () => useContext(DataContext);

function DataProvide<T extends Record<string, any>>(props: T) {
  const { children } = props;
  return <DataContext.Provider value={props}>{children}</DataContext.Provider>;
}

export default DataProvide;
