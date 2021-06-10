import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    SetEditMode = () => {
        this.setState({editMode: true})
    }

    SetViewMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.SetEditMode}> {this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    status
                    <input autoFocus={true} onBlur={this.SetViewMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
