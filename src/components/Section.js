import React from "react";
import PropTypes from 'prop-types';

export default function Section(props) {
    const { title, children } = props;
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object,
}
