import React, { Component } from 'react';
import Statistics from './Statistics';
import Controls from './Controls';
import Section from 'components/Section/';
import Notification from './Notification';

export default class Reviews extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseRating = grade => {
    this.setState(prevState => ({
      [grade]: prevState[grade] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const goodGrades = this.state.good;
    const totalGrades = this.countTotalFeedback();
    return totalGrades === 0 ? 0 : Math.round((goodGrades / totalGrades) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const increaseRating = this.increaseRating;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const isAnyGrades = Object.values(this.state).some(e => e !== 0);
    return (
      <>
        <Section title="Statistics">
          {!isAnyGrades ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          )}
        </Section>
        <Section title="Please leave feedback">
          <Controls onLeaveFeedback={increaseRating} options={options} />
        </Section>
      </>
    );
  }
}
