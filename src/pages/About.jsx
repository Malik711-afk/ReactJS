import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to BasicWeb - a simple and elegant React application built with clean and minimalist styling.</p>
      <p>Our goal is to demonstrate the fundamentals of React development including:</p>
      
      <ul className="about-list">
        <li>Component-based architecture</li>
        <li>React Router for seamless navigation</li>
        <li>Responsive design principles</li>
        <li>Clean and maintainable code structure</li>
      </ul>
      
      <p>This project serves as a starting point for building more complex React applications while maintaining simplicity and readability.</p>
    </div>
  );
};

export default About;