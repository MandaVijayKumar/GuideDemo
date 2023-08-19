import React from 'react';
import PropTypes from 'prop-types';

const LoveSupport = (props) => {
  const { steps } = props;

  return (
    <div>
      <h3>Love Support Resources</h3>
      <ul>
        <li>
          <a href="https://www.psychologytoday.com/us/blog/emotional-fitness/201409/10-tips-help-you-stay-romantic-after-baby" target="_blank" rel="noopener noreferrer">10 Tips to Help You Stay Romantic After Baby</a>
        </li>
        <li>
          <a href="https://www.helpguide.org/articles/relationships-communication/relationship-help.htm" target="_blank" rel="noopener noreferrer">Relationship Help</a>
        </li>
        <li>
          <a href="https://www.mindbodygreen.com/0-20675/5-powerful-ways-to-love-yourself-even-when-you-dont-like-yourself.html" target="_blank" rel="noopener noreferrer">5 Powerful Ways To Love Yourself Even When You Don't Like Yourself</a>
        </li>
      </ul>
    </div>
  );
};

LoveSupport.propTypes = {
  steps: PropTypes.object,
};

LoveSupport.defaultProps = {
  steps: undefined,
};

export default LoveSupport;
