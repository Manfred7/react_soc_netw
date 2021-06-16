import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status:this.props.status
    }

    SetEditMode = () => {
        this.setState({editMode: true})
    }

    SetViewMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    OnStatusChange = (e) => {
        this.setState({status:e.currentTarget.value})
        //this.props.updateProfileStatus(this.state.status)
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.SetEditMode}> {this.props.status  || "No Status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    status
                    <input
                        onChange={this.OnStatusChange}
                        autoFocus={true}
                        onBlur={this.SetViewMode}
                        value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
