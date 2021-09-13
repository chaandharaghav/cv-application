import react from 'react';
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
          role: 'Project Manager',
          location: 'Westheon FGW',
          duration: 'Oct 2017 - present',
          responsibilities: [
            'Conduct day-to-day project coordination, planning, and implementation across multiple teams',
            'Create functional and technical application documents',
          ],
        },
        {
          role: 'Senior UX Designer',
          location: 'Pixelpoint Hive',
          duration: 'Jan 2014 - Sept 2017',
          responsibilities: [
            'Managed complex projects from start to finish',
            'Collaborated with other designers',
            'Translated requirements into polished, high-level designs',
          ],
        },
      ],
      education: [
        {
          role: 'Masters in Project Management',
          location: 'HGFZ Graduate Center',
          duration: 'Jan 2013 - Dec 2014',
          responsibilities: [
            'Studied project planning, coordination, and ethics',
            'Worked with various startups on launching new apps and services',
          ],
        },
        {
          role: 'BA Product Design',
          location: 'Cliffmoor College',
          duration: 'Dec 2008 - Dec 2012',
          responsibilities: [
            'GPA: 3.26',
            'Minor in Management',
            'Thesis involved studying several technology companies and optimizing their product design process',
          ],
        },
      ],
      contact: {
        address:
          'Office Address: 123 Anywhere St., Any City, State, Country 12345',
        email: 'hello@reallygreatsite.com',
        website: 'www.reallygreatsite.com',
        linkedin: '@reallygreatsite',
      },
      skills: [
        {
          name: 'Project Management',
          level: 4,
        },
        {
          name: 'Software Management',
          level: 5,
        },
        {
          name: 'Budgeting and cost Analysis',
          level: 3,
        },
        {
          name: 'Staff and User training',
          level: 2,
        },
        {
          name: 'Process improvement',
          level: 3,
        },
      ],
      awards: [
        'Most Outstanding Employee of the Year, Pixelpoint Hive (2015)',
        'Best Mobile App Design, HGFZ Graduate Center (2014)',
        'Design Awards, Cliffmoor College (2012)',
      ],
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCurrentRoleChange = this.handleCurrentRoleChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCurrentRoleChange(e) {
    this.setState({ 'current-role': e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div id="form-div">
          <Form
            onNameChange={this.handleNameChange}
            onCurrentRoleChange={this.handleCurrentRoleChange}
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
