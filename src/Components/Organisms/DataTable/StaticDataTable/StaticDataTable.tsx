import React, { ReactElement, useCallback, useState } from 'react';

import usePropState from '../../../../hooks/use-prop-state';

import StaticDataTableBody from './StaticDataTableBody';
import StaticDataTableFooter from './StaticDataTableFooter';
import StaticDataTableHeader from './StaticDataTableHeader';
import { IColumnType, IExtraStaticDataTableProps, SortDirectionEnum } from '../Common/types';

export interface IStaticDataTableProps<T> {
  data: Array<T>;
  columns: Array<IColumnType<T>>;
  extra?: IExtraStaticDataTableProps<T>;
  loading?: ReactElement;
  onSortChange?: (sortField?: keyof T, sortDirection?: SortDirectionEnum) => void;
}

const StaticDataTable = <T,>(props: IStaticDataTableProps<T>): ReactElement => {
  const { data, columns, extra, loading, onSortChange } = props;

  const [currentData] = usePropState<Array<T>>(data);
  const [sortField, setSortField] = useState<keyof T | undefined>();
  const [sortDirection, setSortDirection] = useState<SortDirectionEnum | undefined>();

  const handleSortChange = useCallback((newSortField: keyof T, newSortDirection?: SortDirectionEnum) => {
    setSortField(newSortField);
    setSortDirection(newSortDirection);

    if (onSortChange) {
      if (newSortField && newSortDirection) {
        onSortChange(newSortField, newSortDirection);
      } else {
        onSortChange();
      }
    }
  }, []);

  return (
    <table className='gds-table'>
      <StaticDataTableHeader<T>
        columns={columns}
        extra={extra}
        onSortChange={handleSortChange}
        sortDirection={sortDirection}
        sortField={sortField}
      />
      <StaticDataTableBody<T> columns={columns} data={currentData} extra={extra} loading={loading} />
      <StaticDataTableFooter<T> columns={columns} data={currentData} extra={extra} />
    </table>
  );
};

StaticDataTable.defaultProps = {
  columns: [],
  data: [],
};

export default StaticDataTable;
