import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <>
      <StatList>
        <StatItem key="1">
          <span>Good:</span> {good}
        </StatItem>
        <StatItem key="2">
          <span>Neutral:</span> {neutral}
        </StatItem>
        <StatItem key="3">
          <span>Bad:</span> {bad}
        </StatItem>
      </StatList>
      <StatList>
        <StatItem key="4">
          <span>Total:</span> {total}
        </StatItem>
        <StatItem key="5">
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
