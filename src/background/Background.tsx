import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg-slate-800 h-screen">{props.children}</div>
);

export { Background };
