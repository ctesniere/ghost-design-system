import React, { ReactElement } from 'react';
import classnames from 'classnames';

import { ICellProps } from './types';
import { IColumnDate } from '../types';
import { DatePickerField } from '../../../Molecules/DatePickerField';

const DateCell = <T,>(props: ICellProps<T, IColumnDate<T>>): ReactElement => {
  const { column, extra, forcedValue, onChange, row, rowIndex } = props;

  const displayValue = (forcedValue || (row && row[column.dataIndex])) as Date | null | undefined;
  const dateFormat = column.dateFormat || extra?.dateFormat;
  const isCurrentlyEditedRow = extra && 'editedRowIndex' in extra ? extra.editedRowIndex === rowIndex : false;

  return (
    <td className={classnames({ ellipsis: column.ellipsis })}>
      <DatePickerField
        name={String(column.dataIndex)}
        inputClassName={classnames({ 'table--cell-value--date-readonly': !isCurrentlyEditedRow })}
        inputValue={displayValue}
        dateFormat={dateFormat}
        readOnly={!isCurrentlyEditedRow}
        onChange={onChange}
      />
    </td>
  );
};

export default DateCell;
