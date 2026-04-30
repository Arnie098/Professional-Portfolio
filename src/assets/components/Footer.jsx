import React from 'react';
import './Css/Footer.css';

const Footer = () => {
  return (
    <footer id ="footer"className="footer-section text-center py-4">
      <div className="container">
        <p className="mb-2 text-muted">&copy; {new Date().getFullYear()} Arnie Que. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/arnieque.amaba.7/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/Arnie098" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/arniequeamaba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
