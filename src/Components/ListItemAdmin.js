import React from 'react';

import Edit from '../img/edit.png';
import Bin from '../img/bin.png';
import Password from '../img/password.png';

import PopUpPassword from './PopUpPassword';
import ListItemAdminForm from './ListItemAdminForm';
import PopUpDelete from './PopUpDelete';

import '../css/ListItemAdmin.css';

class ListItemAdmin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPassword: false,
            isEditing: false,
            isDeleting: false,
            deleteOk: false
        }

        this.isNewPassword = this.isNewPassword.bind(this);
        this.isEdit = this.isEdit.bind(this);
        this.isDelete = this.isDelete.bind(this);
        this.isDeleteOk = this.isDeleteOk.bind(this);
    };

    isNewPassword() {
        this.setState({
            newPassword: !this.state.newPassword
        });
    };

    isEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    };

    isDelete() {
        this.setState({
            isDeleting: !this.state.isDeleting
        });
    };

    isDeleteOk() {
        this.setState({
            deleteOk: true
        });
        console.log(this.state.deleteOk);
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isEditing === true) {
            this.props.fetchData();
        };

        if(this.state.deleteOk === true) {
            this.props.fetchData();
        };
    };

    render() {
        const url = 'http://localhost:3050/hj2adm/admin';

        if(this.state.isEditing === false) {
            return(
                <li className='listItemAdmin'>
                    {this.state.newPassword ? 
                        <PopUpPassword 
                        newPassword={this.state.newPassword} 
                        isNewPassword={this.isNewPassword} 
                        id={this.props.dataId}/> 
                    : null}
                    {this.state.isDeleting ? 
                        <PopUpDelete 
                        name={this.props.item.name} 
                        id={this.props.dataId} 
                        Delete={this.isDelete} 
                        isDeleting={this.state.isDeleting} 
                        isDeleteOk={this.isDeleteOk}
                        url={url}/> 
                    : null}
                    <div className='listItemAdminHeader'>
                        <h3>{this.props.item.name}</h3>
                        <div className='imgAdminContainer'>
                            <img src={Password} alt='Icône Password' onClick={this.isNewPassword}/>
                            <img src={Edit} alt='Icône Edit' onClick={this.isEdit}/>
                            <img src={Bin} alt='Icône Bin' onClick={this.isDelete}/>
                        </div>
                    </div>
                    <p>{this.props.item.email}</p>
                    {this.props.item.isSuperAdmin ? <p>Super Admin</p> : <p>Admin</p>}
                </li>
            );
        } else {
            return <ListItemAdminForm
            data={this.props.item}
            newPassword={this.state.newPassword} 
            isNewPassword={this.isNewPassword} 
            id={this.props.dataId}
            isEdit={this.isEdit}
            isEditing={this.state.isEditing}
            isDelete={this.isDelete}
            isDeleting={this.state.isDeleting}/>
        }
    };
};

export default ListItemAdmin;