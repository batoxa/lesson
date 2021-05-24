import React, { useEffect, useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const onStatusChange = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            {!editMode ? (
                <div className={styles.statusView} onDoubleClick={activateEditMode}>
                    Status: {props.status || " - - - - -"} &nbsp; &nbsp; &nbsp;
                    <i className='fa fa-pencil-square-o' aria-hidden='true' />
                </div>
            ) : (
                <input
                    className={styles.statusInput}
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    value={status}
                    autoFocus={true}
                />
            )}
        </div>
    );
};

export default ProfileStatusWithHooks;
