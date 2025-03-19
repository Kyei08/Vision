import logo from './logo.svg';
import './App.css';

function TeamMemberCard({ member }) {
  return (
    <div className="team-member-card">
      <img src={member.image} alt={member.name} className="member-logo" />
      <h3>{member.name}</h3>
      <p><strong>Role:</strong> {member.role}</p>
      <p>{member.description}</p>
    </div>
  );
}

function App() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      description: "Expert in React, CSS, and UI animation.",
      image: logo
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      description: "Loves working on APIs, security, and database management.",
      image: logo
    },
    {
      name: "Charlie Davis",
      role: "Full Stack Developer",
      description: "Skilled in both frontend and backend, passionate about solving complex problems.",
      image: logo
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vision Team Portfolio</h1>
        <p>Welcome to our portfolio. Meet our team of innovative coders!</p>
      </header>
      <main className="App-main">
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            We are a community of enthusiastic developers dedicated to sharing ideas, coding together, and building amazing projects.
          </p>
        </section>
        <section className="team-members">
          <h2>Team Members</h2>
          <div className="team-member-list">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
