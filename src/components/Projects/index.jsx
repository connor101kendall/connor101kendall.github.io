import React from 'react'
import {
  Container, 
  H1, 
  H2,
  H3,
  Wrapper,
  Card,
  Icon,
} from './ProjectElements'




const Projects = (background) => {
  return (
    <Container id='projects'>
      <H1>My Projects!</H1>
      <Wrapper>
      <Card background="eblabs">
        <Icon></Icon>
        <H2 href='https://eblabs.dev.e-butterfly.org/en'>eBLabs</H2>
        <H3>React.js, Bootstrap, FastAPI, HTML/CSS</H3>
      </Card>
      <Card background="cobalt">
        <Icon></Icon>
        <H2 href='http://cobalt-group199.herokuapp.com'>Cobalt Hardware</H2>
        <H3>React.js, RestAPI, HTML/CSS</H3>
      </Card>
      <Card background="ICS4U">
        <Icon></Icon>
        <H2 href='https://icsprogramming.ca/2020-2021/kendall1a334/'>ICS4U Site</H2>
        <H3>PHP, MySQL, HTML/CSS</H3>
      </Card>
      <Card background="robobug">
        <Icon></Icon>
        <H2 href='https://icsprogramming.ca/2020-2021/kendall1a334/activities2/platformer-example.php'>Robobug</H2>
        <H3>PHP, MySQL, HTML/CSS</H3>
      </Card>
      
    </Wrapper>
    </Container>
  )
}

export default Projects
