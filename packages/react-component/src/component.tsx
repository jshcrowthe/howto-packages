import React, { useState } from "react";

interface ReactComponentProps {
  initialCount?: number;
}

export const ReactComponent: React.FC<ReactComponentProps> = ({
  children,
  ...props
}) => {
  const [count, setCount] = useState(props.initialCount || 0);

  return (
    <div>
      <div>Hello World</div>
      <div>
        The count is: <span data-test="count">{count}</span>
      </div>
      <button
        data-test="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment the Count
      </button>
    </div>
  );
};
