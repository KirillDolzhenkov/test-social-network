import React from "react";

type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (status: string) => void
}
type LocalStateType = {
    editMode: boolean
    status: string | null
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: LocalStateType = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.onUpdateStatus();
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value});
    }
    onUpdateStatus = () => {
        if (this.state.status){
            this.props.updateStatus( this.state.status);
        }
    }

    render() {

        return (
            <>
                {
                    !this.state.editMode &&
                        <div>
                            <div onDoubleClick={this.activateEditMode}>{
                                this.props.status
                                    ? this.props.status
                                    : "..."
                            }</div>
                        </div>
                }

                {
                    this.state.editMode &&
                        <div>
                            <input
                                autoFocus
                                onBlur={this.deactivateEditMode}
                                value={`${this.state.status}`}  //NEED TO FIX !!!!
                                onChange={this.onStatusChange}
                            />
                        </div>
                }
            </>
        )
    }
}

export  {
    ProfileStatus
}