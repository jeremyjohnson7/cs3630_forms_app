import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        // Bind the specific instance of onChange from this particular class to the onChange method
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Set default form state
        this.state = {
            value: ''
        };
    }

    onChange(event) {
        this.setState({
            [event.name]: event.target.value
        });
    }

    onSubmit() {
        this.props.submitAction(this.state);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.firstName}
                    name="firstName"
                />
                <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.lastName}
                    name="lastName"
                />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default Form;
