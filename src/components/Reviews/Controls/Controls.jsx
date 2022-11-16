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
    </ButtonsList>
  );
}

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array(PropTypes.string.isRequired),
};
