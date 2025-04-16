import './App.css'
import { useNav } from '@/providers/NavContext'
import Header from '@/components/Header/Header'
import Section from '@/components/Section'
import Hero from '@/components/Hero/Hero'
import Project from '@/components/Project/Project'
import { Box, VStack } from '@chakra-ui/react'

function App() {
  const { workRef, aboutRef, contactRef} = useNav();

  return (
    <>
      <Header />
      <Box as="main" h="100vh" overflowY="scroll">
        <Hero />
        <Section ref={workRef}>
          <Section.Header>my work</Section.Header>
          <Section.Body>
            <VStack gap="12">
              <Project
                name="quizz app"
                description="Quizzical is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components."
                techStack={['HTML', 'CSS', 'JavaScript']}
                imgUrl="https://images.unsplash.com/photo-1735660244714-8ef436246ea7"
              />
              <Project
                name="personal dashboard"
                description="A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS."
                techStack={['ReactJS', 'TailwindCSS', 'Firebase']}
                imgUrl="https://images.unsplash.com/photo-1742292042826-cc35ffd81c74"
                reverse={true}
              />
              <Project
                name="password generator"
                description="An app that generates random passwords based on a few user inputs, e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript."
                techStack={['Django', 'MongoDB', 'NextJS']}
                imgUrl="https://images.unsplash.com/photo-1735746693907-da94a7b0eb18"
              />
            </VStack>
          </Section.Body>
        </Section>
        <Section ref={aboutRef}>
          <Section.Header>about me</Section.Header>
          <Section.Body>this is the about section</Section.Body>
        </Section>
        <Section ref={contactRef}>
          <Section.Header>get in touch</Section.Header>
          <Section.Body>this is the contact section</Section.Body>
        </Section>
      </Box>
    </>
  )
}

export default App