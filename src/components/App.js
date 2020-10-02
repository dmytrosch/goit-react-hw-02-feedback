import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    buttonClickHandler = (event) => {
        const btnType = event.target.name;
        switch (btnType) {
            case "good":
                this.setState((prevState) => {
                    return {
                        good: prevState.good + 1,
                    };
                });
                break;
            case "neutral":
                this.setState((prevState) => {
                    return {
                        neutral: prevState.neutral + 1,
                    };
                });
                break;
            case "bad":
                this.setState((prevState) => {
                    return {
                        bad: prevState.bad + 1,
                    };
                });
                break;
            default:
                break;
        }
    };
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return Math.floor((this.state.good / total) * 100);
    };
    render() {
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        onLeaveFeedback={this.buttonClickHandler}
                    />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        countTotalFeedback={this.countTotalFeedback}
                        countPositiveFeedbackPercentage={
                            this.countPositiveFeedbackPercentage
                        }
                    />
                </Section>
            </div>
        );
    }
}
