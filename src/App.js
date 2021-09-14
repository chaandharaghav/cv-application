import react from 'react';
import uniqid from 'uniqid';

import './App.css';
import Form from './components/form/form';

import MainContent from './components/mainContent/MainContent';
import Sidebar from './components/sidebar/Sidebar';

class App extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Olivia Wilson',
      'current-role': 'IT Project Manager',
      'work-experience': [
        {
          id: uniqid(),
          role: 'Project Manager',
          location: 'Westheon FGW',
          duration: 'Oct 2017 - present',
          responsibilities: [
            {
              text: 'Conduct day-to-day project coordination, planning, and implementation across multiple teams',
              id: uniqid(),
            },
            {
              text: 'Create functional and technical application documents',
              id: uniqid(),
            },
          ],
        },
        {
          id: uniqid(),
          role: 'Senior UX Designer',
          location: 'Pixelpoint Hive',
          duration: 'Jan 2014 - Sept 2017',
          responsibilities: [
            {
              text: 'Managed complex projects from start to finish',
              id: uniqid(),
            },
            {
              text: 'Collaborated with other designers',
              id: uniqid(),
            },
            {
              text: 'Translated requirements into polished, high-level designs',
              id: uniqid(),
            },
          ],
        },
      ],
      education: [
        {
          id: uniqid(),
          role: 'Masters in Project Management',
          location: 'HGFZ Graduate Center',
          duration: 'Jan 2013 - Dec 2014',
          responsibilities: [
            {
              text: 'Studied project planning, coordination, and ethics',
              id: uniqid(),
            },
            {
              text: 'Worked with various startups on launching new apps and services',
              id: uniqid(),
            },
          ],
        },
        {
          id: uniqid(),
          role: 'BA Product Design',
          location: 'Cliffmoor College',
          duration: 'Dec 2008 - Dec 2012',
          responsibilities: [
            {
              text: 'GPA: 3.26',
              id: uniqid(),
            },
            {
              text: 'Minor in Management',
              id: uniqid(),
            },
            {
              text: 'Thesis involved studying several technology companies and optimizing their product design process',
              id: uniqid(),
            },
          ],
        },
      ],
      contact: [
        {
          id: uniqid(),
          type: 'address',
          value:
            'Office Address: 123 Anywhere St., Any City, State, Country 12345',
        },
        {
          id: uniqid(),
          type: 'email',
          value: 'hello@reallygreatsite.com',
        },
        {
          id: uniqid(),
          type: 'website',
          value: 'www.reallygreatsite.com',
        },
        {
          id: uniqid(),
          type: 'linkedin',
          value: '@reallygreatsite',
        },
      ],
      skills: [
        {
          id: uniqid(),
          name: 'Project Management',
          level: 4,
        },
        {
          id: uniqid(),
          name: 'Software Management',
          level: 5,
        },
        {
          id: uniqid(),
          name: 'Budgeting and cost Analysis',
          level: 3,
        },
        {
          id: uniqid(),
          name: 'Staff and User training',
          level: 2,
        },
        {
          id: uniqid(),
          name: 'Process improvement',
          level: 3,
        },
      ],
      awards: [
        {
          text: 'Most Outstanding Employee of the Year, Pixelpoint Hive (2015)',
          id: uniqid(),
        },
        {
          text: 'Best Mobile App Design, HGFZ Graduate Center (2014)',
          id: uniqid(),
        },
        {
          text: 'Design Awards, Cliffmoor College (2012)',
          id: uniqid(),
        },
      ],
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCurrentRoleChange = this.handleCurrentRoleChange.bind(this);
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
    this.handleResponsibilityChange =
      this.handleResponsibilityChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCurrentRoleChange(e) {
    this.setState({ 'current-role': e.target.value });
  }

  handlePropertyChange(e) {
    const id = e.target.id;
    const property = e.target.previousElementSibling.innerText.toLowerCase();

    const experience = Array.from(this.state['work-experience']);
    const education = Array.from(this.state.education);

    let index = experience.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      experience[index][property] = e.target.value;
    } else {
      index = education.findIndex((obj) => obj.id === id);
      education[index][property] = e.target.value;
    }

    this.setState({ education: education, 'work-experience': experience });
  }

  handleResponsibilityChange(e) {
    const id = e.target.id;

    const experience = Array.from(this.state['work-experience']);
    const education = Array.from(this.state.education);

    let objectIndex = experience.findIndex((obj) =>
      obj.responsibilities.find((resp) => resp.id === id),
    );

    if (objectIndex !== -1) {
      const responsibilities = experience[objectIndex].responsibilities;
      const respIndex = responsibilities.findIndex((resp) => resp.id === id);

      experience[objectIndex].responsibilities[respIndex].text = e.target.value;
    } else {
      objectIndex = education.findIndex((obj) =>
        obj.responsibilities.find((resp) => resp.id === id),
      );
      const responsibilities = education[objectIndex].responsibilities;
      const respIndex = responsibilities.findIndex((resp) => resp.id === id);

      education[objectIndex].responsibilities[respIndex].text = e.target.value;
    }

    this.setState({ education: education, 'work-experience': experience });
  }

  handleContactChange(e) {
    const id = e.target.id;
    const contacts = Array.from(this.state.contact);
    const index = contacts.findIndex((contact) => contact.id === id);

    contacts[index].value = e.target.value;
    this.setState({ contact: contacts });
  }

  render() {
    return (
      <div className="App">
        <div id="form-div">
          <Form
            onNameChange={this.handleNameChange}
            onCurrentRoleChange={this.handleCurrentRoleChange}
            onPropertyChange={this.handlePropertyChange}
            onResponsibilityChange={this.handleResponsibilityChange}
            onContactChange={this.handleContactChange}
            details={this.state}
          />
        </div>
        <div id="preview-div">
          <Sidebar
            contact={this.state.contact}
            skills={this.state.skills}
            achievements={this.state.awards}
          />
          <MainContent
            name={this.state.name}
            role={this.state['current-role']}
            work-experience={this.state['work-experience']}
            education={this.state.education}
          />
        </div>
      </div>
    );
  }
}

export default App;
