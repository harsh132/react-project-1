import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ["tag1", "tag2"],
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no elements</p>;
        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <div>
                <span
                    style={{ fontSize: 25 }}
                    className={this.getBadgeClasses()}
                >
                    {this.formatCount()}
                </span>
                <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                        this.handleIncrement(1);
                    }}
                >
                    Increment
                </button>
                <br />
                {this.renderTags()}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
