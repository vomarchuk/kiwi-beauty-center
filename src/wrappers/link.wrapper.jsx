export const WrapperLink = ({ children, link, target }) => {
  return (
    <a href={link} target={target} rel="noreferrer">
      {children}
    </a>
  );
};
