import React from "react";
import PropTypes from "prop-types";

export default function FeedbackOptions(props) {
    return (
        <>
            <button name="good" onClick={props.onLeaveFeedback}>
                Good
            </button>
            <button name="neutral" onClick={props.onLeaveFeedback}>
                Neutral
            </button>
            <button name="bad" onClick={props.onLeaveFeedback}>
                Bad
            </button>
        </>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};
