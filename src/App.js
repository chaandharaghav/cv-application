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
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleProficiencyChange = this.handleProficiencyChange.bind(this);
    this.handleAchievementChange = this.handleAchievementChange.bind(this);
    this.handleNewExperienceEntry = this.handleNewExperienceEntry.bind(this);
    this.handleDeleteExperienceEntry =
      this.handleDeleteExperienceEntry.bind(this);
    this.handleNewEducationEntry = this.handleNewEducationEntry.bind(this);
    this.handleDeleteEducationEntry =
      this.handleDeleteEducationEntry.bind(this);
    this.handleNewSkillEntry = this.handleNewSkillEntry.bind(this);
    this.handleDeleteSkillEntry = this.handleDeleteSkillEntry.bind(this);
    this.handleNewAwardEntry = this.handleNewAwardEntry.bind(this);
    this.handleDeleteAwardEntry = this.handleDeleteAwardEntry.bind(this);
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

  handleSkillChange(e) {
    const id = e.target.id;
    const skills = Array.from(this.state.skills);
    const index = skills.findIndex((skill) => skill.id === id);

    skills[index].name = e.target.value;
    this.setState({ skills: skills });
  }

  handleProficiencyChange(e) {
    const id = e.target.id;
    const skills = Array.from(this.state.skills);
    const index = skills.findIndex((skill) => skill.id === id);

    skills[index].level = e.target.value;
    this.setState({ skills: skills });
  }

  handleAchievementChange(e) {
    const id = e.target.id;
    const achievements = Array.from(this.state.awards);
    const index = achievements.findIndex((award) => award.id === id);

    achievements[index].text = e.target.value;
    this.setState({ awards: achievements });
  }

  handleNewExperienceEntry() {
    const workExperience = Array.from(this.state['work-experience']);
    const newExperience = {
      id: uniqid(),
      role: 'Your role here',
      location: 'Where did you work ?',
      duration: 'Month Year - Month Year',
      responsibilities: [
        {
          text: 'Eg. I managed this that and that',
          id: uniqid(),
        },
        {
          text: 'Eg. Collaborated from them and used this',
          id: uniqid(),
        },
        {
          text: 'Eg. Translated requirements into this level real-world project',
          id: uniqid(),
        },
      ],
    };
    workExperience.push(newExperience);
    this.setState({ 'work-experience': workExperience });
  }

  handleDeleteExperienceEntry(e) {
    const workExperience = Array.from(this.state['work-experience']);
    const id = e.target.id;

    const index = workExperience.findIndex(
      (experience) => experience.id === id,
    );
    workExperience.splice(index, 1);

    this.setState({ 'work-experience': workExperience });
  }
  handleNewEducationEntry() {
    const education = Array.from(this.state.education);
    const newEducation = {
      id: uniqid(),
      role: 'Your major here',
      location: 'What institute did you attend ?',
      duration: 'Month Year - Month Year',
      responsibilities: [
        {
          text: 'Eg. GPA : 3.54',
          id: uniqid(),
        },
        {
          text: 'Eg. Studied this that and that',
          id: uniqid(),
        },
        {
          text: 'Eg. Worked with that club and achieved this',
          id: uniqid(),
        },
      ],
    };
    education.push(newEducation);
    this.setState({ education: education });
  }

  handleDeleteEducationEntry(e) {
    const education = Array.from(this.state.education);
    const id = e.target.id;

    const index = education.findIndex((eduObj) => eduObj.id === id);
    education.splice(index, 1);

    this.setState({ education: education });
  }

  handleNewSkillEntry(e) {
    const skills = Array.from(this.state.skills);
    const newSkill = {
      id: uniqid(),
      name: 'Your skill',
      level: 1,
    };

    skills.push(newSkill);
    this.setState({ skills: skills });
  }
  handleDeleteSkillEntry(e) {
    const skills = Array.from(this.state.skills);
    const id = e.target.id;

    const index = skills.findIndex((skill) => skill.id === id);
    skills.splice(index, 1);

    this.setState({ skills: skills });
  }

  handleNewAwardEntry(e) {
    const awards = Array.from(this.state.awards);
    const newAward = {
      id: uniqid(),
      text: 'Award given to you',
    };

    awards.push(newAward);
    this.setState({ awards: awards });
  }
  handleDeleteAwardEntry(e) {
    const awards = Array.from(this.state.awards);
    const id = e.target.id;

    const index = awards.findIndex((award) => award.id === id);
    awards.splice(index, 1);

    this.setState({ awards: awards });
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
            onSkillChange={this.handleSkillChange}
            onProficiencyChange={this.handleProficiencyChange}
            onAchievementChange={this.handleAchievementChange}
            addNewExperienceEntry={this.handleNewExperienceEntry}
            deleteExperienceEntry={this.handleDeleteExperienceEntry}
            addNewEducationEntry={this.handleNewEducationEntry}
            deleteEducationEntry={this.handleDeleteEducationEntry}
            addNewSkillEntry={this.handleNewSkillEntry}
            deleteSkillEntry={this.handleDeleteSkillEntry}
            addNewAwardEntry={this.handleNewAwardEntry}
            deleteAwardEntry={this.handleDeleteAwardEntry}
            details={this.state}
          />
        </div>
        <div id="preview-div-wrapper">
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
      </div>
    );
  }
}

export default App;
