import react from 'react';
import './App.css';

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
          skill: 'Project Management',
          level: 4,
        },
        {
          skill: 'Software Management',
          level: 2,
        },
        {
          skill: 'Budgeting and cost Analysis',
          level: 3,
        },
        {
          skill: 'Staff and User training',
          level: 2,
        },
        {
          skill: 'Process improvement',
          level: 3,
        },
      ],
      awards: [
        'Most Outstanding Employee of the Year, Pixelpoint Hive (2015)',
        'Best Mobile App Design, HGFZ Graduate Center (2014)',
        'Design Awards, Cliffmoor College (2012)',
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div id="form-div"></div>
        <div id="preview-div">
          <Sidebar />
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
