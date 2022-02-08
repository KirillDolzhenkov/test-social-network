import React from "react";

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render() {

        return (
            <>
                {
                    !this.state.editMode &&
                        <div>
                            <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
                        </div>
                }

                {
                    this.state.editMode &&
                        <div>
                            <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status}></input>
                        </div>
                }
            </>
        )
    }
}

export  {
    ProfileStatus
}