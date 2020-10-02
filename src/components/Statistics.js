import React from "react";
import PropTypes from "prop-types";

export default function Statistics(props) {
    const {
        countTotalFeedback,
        good,
        bad,
        neutral,
        countPositiveFeedbackPercentage,
    } = props;
    return (
        <>
            {countTotalFeedback() > 0 ? (
                <>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>

                    <p>Total: {countTotalFeedback()}</p>
                    <p>
                        Positive feedback: {countPositiveFeedbackPercentage()}%
                    </p>
                </>
            ) : (
                <p>No feedback given</p>
            )}
        </>
    );
}

Statistics.propTypes = {
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};
