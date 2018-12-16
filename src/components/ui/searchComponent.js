import React from "react";
import { Button } from "react-bootstrap";

const SearchComponent = props => {
    const { placeholder, buttonText, handleSubmit, value, handleChange } = props;
    return (
        <form className="Search" onSubmit={handleSubmit}>
            <input
                id="formControlsText"
                type="text"
                label="Text"
                placeholder= {placeholder}
                value={value}
                onChange={handleChange}
            />
            <Button className="Button btn btn-default" type="submit">
                {buttonText}
            </Button>
        </form>
    );
};

export default SearchComponent;
