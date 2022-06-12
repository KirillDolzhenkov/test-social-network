import React, {useEffect, useState} from "react";

import styles from "./ProfileInfo.module.css"

//types:
type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (status: string) => void
}
type LocalStateType = {
    editMode: boolean
    status: string | null
}

//class component:
const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {

    //localState for status:
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string | null>(props.status);

    //re-rendering of status's local state if its props have changed
    useEffect(()=>{
        setStatus(props.status);
    },[props.status])

    //on&off edit mode of status:
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        onUpdateStatus();
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            deactivateEditMode();
        }
    }

    //onchange localState of status:
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    //update status callback  function from local state to global state:
    const onUpdateStatus = () => {
        if (status) {
            props.updateStatus(status);
        } else {
            props.updateStatus('');
        }
    }

    /*//re-rendering of status's local state if its props have changed:
    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: any) { //need to check types!!!
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status});
        }
    }*/

    return (
        <>
            {
                !editMode &&
                <div>
                    <div className={styles.statusStaticMode} onDoubleClick={activateEditMode}>{
                        props.status
                            ? props.status
                            : <div className={`${styles.statusStaticMode} ${styles.statusDefault}`}>{"set status"}</div>
                    }</div>
                </div>
            }

            {
                editMode &&
                <div className={`${styles.statusEditMode}`}>
                    <div>
                        <input
                            autoFocus
                            /*onBlur={this.deactivateEditMode}*/
                            onKeyPress={onKeyPressHandler}
                            value={`${status}`}
                            onChange={onStatusChange}
                        />
                    </div>
                    <div>
                        <button
                            onClick={deactivateEditMode}
                        >save
                        </button>
                    </div>
                </div>
            }

        </>
    )

}

export {
    ProfileStatusWithHooks
}