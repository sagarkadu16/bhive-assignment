interface Props {
  children: React.ReactNode;
  color?: string;
}

export const Header = ({ children, color = "#263238" }: Props) => {
  return <div className={`text-4xl text-[${color}]`}>{children}</div>;
};
