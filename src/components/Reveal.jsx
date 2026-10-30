import { useInView } from "../hooks/useInView.js";

// Fades its children in once. Without JavaScript or with reduced motion the content is simply visible.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useInView(0.15);
  return (
    <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
