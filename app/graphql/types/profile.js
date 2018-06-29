const Scalars = require('./scalars');
const Article = require('./article');
const Skill = require('./skill');
const Value = require('./value');
const Experience = require('./experience');
const Project = require('./project');
const Contact = require('./contact');
const Salary = require('./salary');
const Story = require('./story');
const Image = require('./image');
const Error = require('./error');

const Profile = `
    type Profile {
        id: String
        email: String
        firstName: String
        lastName: String
        featuredArticles: [Article]
        skills: [Skill]
        values: [Value]
        experience: [Experience]
        projects: [Project]
        contact: Contact
        hasAvatar: Boolean
        hasProfileCover: Boolean
        coverBackground: String
        story: Story
        salary: Salary
        errors: [Error]
    }
`;

module.exports = () => [Profile, Story, Salary, Contact, Skill, Value, Article, Experience, Project];

