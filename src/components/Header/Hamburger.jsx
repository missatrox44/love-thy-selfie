import { useState } from 'react';

import classNames from 'classnames';

export default function Hamburger() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={classNames(`tham tham-e-squeeze tham-w-6`, { 'tham-active': opened })}>
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}