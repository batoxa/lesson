import React from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };
    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status,
        });
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.target.value,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status);
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div>
                {" "}
                {!this.state.editMode ? (
                    <div className={styles.statusView} onDoubleClick={this.activateEditMode}>
                        Status: {this.props.status || " - - - - -"}
                    </div>
                ) : (
                    <input
                        className={styles.statusInput}
                        onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        autoFocus={true}
                    />
                )}
            </div>
        );
    }
}

export default ProfileStatus;
