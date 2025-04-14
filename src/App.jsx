import './App.css'
import Section from '@/components/Section'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Box as="main">
        <Section>
          <Section.Header>my work</Section.Header>
          <Section.Body>this is the work section</Section.Body>
        </Section>
        <Section>
          <Section.Header>about me</Section.Header>
          <Section.Body>this is the about section</Section.Body>
        </Section>
        <Section>
          <Section.Header>get in touch</Section.Header>
          <Section.Body>this is the contact section</Section.Body>
        </Section>
      </Box>
    </>
  )
}

export default App