import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <>
      <StatList>
        <StatItem id="1">
          <span>Good:</span> {good}
        </StatItem>
        <StatItem id="2">
          <span>Neutral:</span> {neutral}
        </StatItem>
        <StatItem id="3">
          <span>Bad:</span> {bad}
        </StatItem>
      </StatList>
      <StatList>
        <StatItem id="4">
          <span>Total:</span> {total}
        </StatItem>
        <StatItem id="5">
          <span>Positive:</span> {positive}%
        </StatItem>
      </StatList>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
