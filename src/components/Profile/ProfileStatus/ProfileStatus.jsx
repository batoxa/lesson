import React from "react";
import styles from "./ProfileStatus.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div> {
                !this.state.editMode
                    ? <div className={styles.statusView} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.aboutMe}</div>
                    : <input className={styles.statusInput} onBlur={this.deactivateEditMode.bind(this)} value={this.props.aboutMe} autoFocus={true}/>
            }
            </div>
        )
    }
};

export default ProfileStatus;
