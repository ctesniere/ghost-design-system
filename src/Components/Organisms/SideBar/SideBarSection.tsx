import React, { PropsWithChildren, ReactElement } from 'react';

export interface ISideBarSectionProps {
  /** Disable the section, visible, but no interaction (optional, default: false) */
  disabled?: boolean;
  /** Add divider to the section (optional, default: false) */
  divider?: boolean;
  /** Hide the section and the its items (optional, default: false) */
  hidden?: boolean;
  /** Label of the section (optional, default: undefined) */
  label?: string;
}

const SideBarSection = (props: PropsWithChildren<ISideBarSectionProps>): ReactElement => {
  const { children, divider, hidden, label } = props;

  if (hidden) return <></>;

  return (
    <>
      {divider && <div className='sidebar-divider' />}
      {label && <div className='section'>{label}</div>}
      {children}
    </>
  );
};

SideBarSection.defaultProps = {
  disabled: false,
  label: undefined,
  hidden: false,
  divider: false,
};

export default SideBarSection;
