import React, { useState } from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


function SkillsSubheader() {
  return (
    <ListSubheader
      component="div"
      id="skills"
      name="skills"
      className="text-5xl flex justify-center py-9 container reveal fade-right"
      style={{ color: 'white', background
      : 'black', fontSize: '90px' }}
    >
      <p className="alfa-slab-one" style={{ fontSize: '90px' }}>Skills</p>
    </ListSubheader>
  );
}

function SkillListItem({ icon, text, open, onClick }) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
  );
}

function SkillsList({ open, items }) {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <ListItemButton key={index} sx={{ pl: 10 }}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
}

function Skills() {
    const [open, setOpen] = useState({
        frontEnd: false,
        backEnd: false,
        programmingLanguages: false,
        systemDesignTools: false,
      });

  const toggleSkillOpen = (skill) => {
    setOpen((prevOpen) => ({ ...prevOpen, [skill]: !prevOpen[skill] }));
  };

  return (
    <div style={{ display: 'flex', margin: '350px', marginLeft: '100px', marginTop: '300px', marginBottom: '450px' }}>
      <List sx={{ width: '100%', maxWidth: 360,  marginRight: '20px' }} component="nav">
        <SkillsSubheader />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }} >
                <SkillListItem
                text="Front End Technologies"
                open={open.frontEnd}
                onClick={() => toggleSkillOpen('frontEnd')}
                />
                <SkillsList open={open.frontEnd} items={['DOM Manipulation', 'WebSockets', 'React JS', 'React Hooks'].map((item, index) => (
        <div key={index} className="skills-class">{item}</div>
    ))}
                 />
            </div>
            <div style={{ flex: 1 }}>
                <SkillListItem
                text="Back End Technologies"
                open={open.backEnd}
                onClick={() => toggleSkillOpen('backEnd')}
                />
                <SkillsList open={open.backEnd} items={['PostgreSQL', 'FastAPI'].map((item, index) => (
        <div key={index} className="skills-class">{item}</div>
    ))} />
            </div>
            <div style={{ flex: 1 }}>
                <SkillListItem
                text="Programming Languages"
                open={open.programmingLanguages}
                onClick={() => toggleSkillOpen('programmingLanguages')}
                />
                <SkillsList open={open.programmingLanguages} items={['Python', 'JavaScript', 'HTML5', 'CSS', 'SQL'].map((item, index) => (
        <div key={index} className="skills-class">{item}</div>
    ))} />
            </div>
            <div style={{ flex: 1 }}>
                <SkillListItem
                text="System Design Tools"
                open={open.systemDesignTools}
                onClick={() => toggleSkillOpen('systemDesignTools')}
                />
                <SkillsList open={open.systemDesignTools} items={['Monoliths', 'Microservices', 'Domain-Driven Design', 'Message Passing'].map((item, index) => (
        <div key={index} className="skills-class">{item}</div>
    ))} /> 
            </div>
        </div>
        </List>
    </div>
  );
};

export default Skills;
