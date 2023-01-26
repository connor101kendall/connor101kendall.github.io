import React from 'react'
import { 
  FaJsSquare,
  FaMicroscope,
  FaPencilRuler,
 } from 'react-icons/fa'
  import { 
    Container, 
    H1, 
    Wrapper, 
    Card, 
    Icon, 
    H2, 
    H3,
    List,
    ListItem
  } from './ExperienceElements'

const Experience = () => {
  return (
    <Container id='experience'>
    <H1>Experience</H1>
    <Wrapper>
      <Card>
        <Icon><FaPencilRuler /></Icon>
        <H2>Designer</H2>
        <H3>Interests:</H3>
        <List>
          <ListItem>UX/UI</ListItem>
          <ListItem>3D Modelling</ListItem>
          <ListItem>Finate Element Analysis</ListItem>
        </List>
        <br />
        <H3>Tools:</H3>
        <List>
          <ListItem>Onshape</ListItem>
          <ListItem>SolidWorks</ListItem>
          <ListItem>Figma</ListItem>
        </List>
      </Card>
      <Card>
      <Icon><FaJsSquare /></Icon>
        <H2>Developer</H2>
        <H3>Tools:</H3>
        <List>
          <ListItem>React.js</ListItem>
          <ListItem>Bootstrap</ListItem>
          <ListItem>HTML/CSS</ListItem>
          <ListItem>PHP</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>C#</ListItem>
          <ListItem>C++</ListItem>
        </List>
      </Card>
      <Card>
      <Icon><FaMicroscope /></Icon>
        <H2>Student</H2>
        <H3>Coursework:</H3>
        <List>
          <ListItem>Human Factors</ListItem>
          <ListItem>Data Structures and Algorithms</ListItem>
          <ListItem>Task Analysis</ListItem>
          <ListItem>Statics Analysis</ListItem>
          <ListItem>Matrices and Linear Systems</ListItem>
          <ListItem>Deformable Solids Analysis</ListItem>
          <ListItem>Differential Equations</ListItem>
        </List>
      </Card>
    </Wrapper>
  </Container>
  )
}

export default Experience
