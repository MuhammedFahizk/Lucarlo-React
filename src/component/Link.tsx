

interface Props {
    href: string;
    className: string;
    children: string
}
const Link = ({href, className, children}: Props) => {
  return (
    <a href={href} className={className}>{children}</a>
  )
}

export default Link