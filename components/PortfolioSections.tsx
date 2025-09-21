import React from 'react';

export default function PortfolioSections() {
  return (
    <div className="prose max-w-none">
      <section>
        <h2>About Me</h2>
        <p>Passionate software tester and developer focused on automation, API, and web app testing.</p>
      </section>

      <section>
        <h2>Skills & Technologies</h2>
        <h3>Tools & Frameworks</h3>
        <ul>
          <li>JIRA</li><li>Postman</li><li>Oracle SQL Developer</li><li>Selenium WebDriver</li><li>FireFlink</li>
        </ul>
        <h3>Programming Languages</h3>
        <ul>
          <li>Java</li><li>Python</li><li>SQL</li><li>TypeScript</li>
        </ul>
        <h3>Development Platforms</h3>
        <ul>
          <li>Next.js</li><li>Vercel</li><li>Android</li><li>Git/GitHub</li>
        </ul>
        <h3>Core Competencies</h3>
        <ul>
          <li>Test Automation</li><li>API Testing</li><li>UI Testing</li><li>Integration Testing</li>
        </ul>
      </section>

      <section>
        <h2>Professional Experience</h2>
        
          <article>
            <h3>Software Testing Trainee</h3>
            <p>QSpiders</p>
            <p>📍 Noida, UP • 📅 2025</p>
            <ul>
              <li>Built Selenium automation for e-commerce flows.</li><li>Practiced API testing and integration scenarios.</li>
            </ul>
          </article>
        
      </section>

      <section>
        <h2>Featured Projects</h2>
        
          <article>
            <h3>Automation Scripts for StarQuik</h3>
            <p>E-commerce web testing with Selenium and Java.</p>
            <ul>
              <li>Wishlist toast verification</li><li>Stock-out handling</li><li>Run analytics and reruns</li>
            </ul>
          </article>
        
      </section>

      <section>
        <h2>Education</h2>
        
          <article>
            <h3>Training — Software Testing</h3>
            <p>QSpiders</p>
            <p>📍 Noida • 📅 Current</p>
          </article>
        
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Programming in Python (Meta)</li><li>Juniper Networks Cloud Virtual Internship</li><li>Smart Contract Dev (Polygon Network)</li>
        </ul>
      </section>
    </div>
  );
}
