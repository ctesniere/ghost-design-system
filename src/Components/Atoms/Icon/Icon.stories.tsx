import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export default {
  title: 'Atom/Icon',
};

const Template = (args: { icons: Array<[IconPrefix, IconName]> }) => {
  const { icons } = args;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '20px',
        gridAutoRows: 'minmax(100px, auto)',
      }}>
      {icons.map((icon, index) => {
        const spin = index % 7 == 0;
        return (
          <div key={icon[1]} style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
            <FontAwesomeIcon icon={icon} size='2x' spin={spin} />
            <div style={{ fontWeight: '400', fontSize: '14px', margin: '10px auto' }}>{`${icon[0]} ${icon[1]}`}</div>
            <div style={{ fontWeight: '300', fontSize: '10px', margin: 'auto' }}>{spin && '(Spinning)'}</div>
          </div>
        );
      })}
    </div>
  );
};

export const List = Template.bind({});
List.args = {
  icons: [
    ['fal', 'arrow-to-bottom'],
    ['fal', 'balance-scale'],
    ['fal', 'ballot-check'],
    ['fal', 'bell'],
    ['fal', 'briefcase'],
    ['fal', 'chart-bar'],
    ['fal', 'check'],
    ['fal', 'chevron-left'],
    ['fal', 'chevron-right'],
    ['fal', 'cog'],
    ['fal', 'comment-alt-exclamation'],
    ['fal', 'edit'],
    ['fal', 'ellipsis-h'],
    ['fal', 'exclamation-circle'],
    ['fal', 'exclamation-triangle'],
    ['fal', 'external-link'],
    ['fal', 'eye'],
    ['fal', 'file-alt'],
    ['fal', 'file-medical-alt'],
    ['fal', 'file-powerpoint'],
    ['fal', 'filter'],
    ['fal', 'hand-paper'],
    ['fal', 'highlighter'],
    ['fal', 'info-circle'],
    ['fal', 'list-ol'],
    ['fal', 'list-ul'],
    ['fal', 'long-arrow-alt-down'],
    ['fal', 'long-arrow-alt-left'],
    ['fal', 'long-arrow-alt-up'],
    ['fal', 'minus'],
    ['fal', 'paper-plane'],
    ['fal', 'pen'],
    ['fal', 'pipe'],
    ['fal', 'plus'],
    ['fal', 'question-circle'],
    ['fal', 'save'],
    ['fal', 'sort'],
    ['fal', 'sort-down'],
    ['fal', 'sort-up'],
    ['fal', 'spinner'],
    ['fal', 'square'],
    ['fal', 'table'],
    ['fal', 'text-size'],
    ['fal', 'times'],
    ['fal', 'times-circle'],
    ['fal', 'trash-alt'],
    ['fal', 'undo'],
    ['fal', 'upload'],
    ['fal', 'user-circle'],
    ['fal', 'user-lock'],
    ['fal', 'user-unlock'],
    ['far', 'bold'],
    ['far', 'horizontal-rule'],
    ['far', 'image'],
    ['far', 'indent'],
    ['far', 'italic'],
    ['far', 'link'],
    ['far', 'outdent'],
    ['far', 'palette'],
    ['far', 'strikethrough'],
    ['far', 'underline'],
    ['fas', 'caret-down'],
    ['fas', 'square'],
    ['fas', 'square-check'],
  ],
};
