import './App.css'
import Header from '@/components/Header/Header'
import Section from '@/components/Section'
import Hero from '@/components/Hero/Hero'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Header />
      <Box as="main">
        <Section>
          <Section.Body>
            <Hero />
          </Section.Body>
        </Section>
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