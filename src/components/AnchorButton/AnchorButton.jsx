import { Button } from "@chakra-ui/react"

export default function AnchorButton(props) {
  const {children, ref, func, ...attributes} = props;

  function scrollToRef() {
    func && func();
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <Button
      onClick={scrollToRef}
      {...attributes}
    >
      {children}
    </Button>
  )
}