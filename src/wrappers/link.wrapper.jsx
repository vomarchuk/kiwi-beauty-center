export const WrapperLink = ({ children, link, target, ariaLabel }) => {
  return (
    <a href={link} target={target} rel="noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
};
