import { FC, ReactNode } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 text-center">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;