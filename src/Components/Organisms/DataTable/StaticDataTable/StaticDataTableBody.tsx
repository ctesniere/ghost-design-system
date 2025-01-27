import React, { KeyboardEvent, ReactElement, MouseEvent, useState } from 'react';
import classnames from 'classnames';

import StaticDataTableCell from './StaticDataTableCell';
import { IColumnType, IExtraLineEditableInPlaceDataTableProps } from '../Common/types';
import DataTableCellSelectable from '../Common/DataTableCellSelectable';
import { Icon } from '../../../Atoms/Icon';

interface IStaticDataTableBodyProps<T> {
  columns: Array<IColumnType<T>>;
  data: Array<T>;
  dataTestId?: string;
  extra?: IExtraLineEditableInPlaceDataTableProps<T>;
  loading?: ReactElement;
}

const StaticDataTableBody = <T,>(props: IStaticDataTableBodyProps<T>): ReactElement => {
  const { columns, data, dataTestId, extra, loading } = props;

  const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});

  const isSelectable = extra?.onRowSelect;
  const isExtended = extra?.onRowSelect || extra?.computeTotal;

  const handleRowClick = (row: T, rowIndex: number) => {
    return extra && extra.onRowClick
      ? (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
          if (event.type === 'keyup' && (event as KeyboardEvent).key !== 'Enter') {
            return;
          }
          if (extra && extra.onRowClick) {
            event.preventDefault();
            event.stopPropagation();
            extra.onRowClick(row, rowIndex);
          }
        }
      : undefined;
  };

  /** Handle */
  const handleSelectClick = (row: T, rowIndex: number) => {
    return (_event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>, selected: boolean) => {
      const newSelectedRows = { ...selectedRows };
      newSelectedRows[rowIndex] = selected;
      setSelectedRows(newSelectedRows);
      if (extra && extra.onRowSelect) {
        extra.onRowSelect(
          data.filter((_row, index) => newSelectedRows[index]),
          row,
          rowIndex,
        );
      }
    };
  };

  return (
    <tbody>
      {data.map((row, rowIndex) => {
        return (
          <tr
            className={classnames({ pointer: extra && extra.onRowClick, selected: selectedRows[rowIndex] })}
            data-testid={dataTestId && `${dataTestId}-row-${rowIndex}`}
            key={`row-${rowIndex}`}
            onClick={handleRowClick(row, rowIndex)}
            onKeyUp={handleRowClick(row, rowIndex)}
            tabIndex={extra && extra.onRowClick ? 0 : -1}>
            {isExtended &&
              (isSelectable ? (
                <DataTableCellSelectable
                  dataTestId={dataTestId && `${dataTestId}-select-row-${rowIndex}`}
                  handleSelectClick={handleSelectClick(row, rowIndex)}
                  selected={selectedRows[rowIndex]}
                  selectable={
                    (extra && extra.isSelectable ? extra.isSelectable(row, rowIndex) : true) && !extra.editedRowIndex
                  }
                />
              ) : (
                <td></td>
              ))}

            {columns.map((column) => {
              return (
                <StaticDataTableCell<T>
                  key={`cell-${rowIndex}-${column.title}`}
                  column={column}
                  row={row}
                  extra={extra}
                  rowIndex={rowIndex}
                />
              );
            })}
          </tr>
        );
      })}
      {!loading && (!data || data.length === 0) && (
        <tr className='no-data'>
          <td colSpan={columns.filter((column) => !column.hidden).length + (isSelectable ? 1 : 0)}>
            <div className='no-data-container'>
              <div className='no-data-text'>{extra?.localization?.noData ?? 'No data'}</div>
              <Icon icon={['fal', 'inbox']} size='2x' className='no-data-icon' />
            </div>
          </td>
        </tr>
      )}
      {loading && (
        <tr className='no-data'>
          <td colSpan={columns.filter((column) => !column.hidden).length + (isSelectable ? 1 : 0)}>{loading}</td>
        </tr>
      )}
    </tbody>
  );
};

export default StaticDataTableBody;
