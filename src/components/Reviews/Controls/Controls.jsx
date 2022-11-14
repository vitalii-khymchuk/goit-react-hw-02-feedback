import PropTypes from 'prop-types';
import { ControlItem, ButtonsList, Button } from './Controls.styled';

export default function Controls({ onLeaveFeedback, options }) {
  return (
    <ButtonsList>
      {options.map(item => (
        <ControlItem>
          <Button type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </Button>
        </ControlItem>
      ))}
      {/* <ControlItem id="qq">
        <Button
          type="button"
          color="green"
          onClick={() => increaseRating('good')}
        >
          Good
        </Button>
      </ControlItem>
      <ControlItem id="qa">
        <Button
          type="button"
          color="yellow"
          onClick={() => increaseRating('neutral')}
        >
          Neutral
        </Button>
      </ControlItem>
      <ControlItem id="qw">
        <Button type="button" color="red" onClick={() => increaseRating('bad')}>
          Bad
        </Button>
      </ControlItem> */}
    </ButtonsList>
  );
}

Controls.propTypes = {
  increaseRating: PropTypes.func.isRequired,
};
