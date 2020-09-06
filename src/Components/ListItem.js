import React from 'react';

import Accept from '../img/accept.png';
import Accepted from '../img/accepted.png';
import Edit from '../img/edit.png';
import Bin from '../img/bin.png';

import '../css/ListItem.css';
import ListItemForm from './ListItemForm';
import PopUpDelete from './PopUpDelete';

class ListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isValidate: this.props.item.adminValidate,
            isValidLoaded: false,
            validData: [],
            validError: null,
            isEditing: false,
            isDeleting: false,
            deleteOk: false
        };

        this.isValidate = this.isValidate.bind(this);
        this.isEdit = this.isEdit.bind(this);
        this.isDelete = this.isDelete.bind(this);
        this.validData = this.validData.bind(this);
        this.isDeleteOk = this.isDeleteOk.bind(this);
    };

    isValidate() {
        this.setState({
            isValidate: !this.state.isValidate
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
        console.log(this.state.isDeleting);
    };

    validData(isValid) {
        const url = 'http://localhost:3050/hj2shel/shelters/validate';
        const token = localStorage.getItem('token');
        const itemId = this.props.dataId;
                    
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                id: itemId,
                adminValidate: isValid
            }),
            headers: {
                'Authorization': 'Bearer ' + token,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                  isValidLoaded: true,
                  validData: result
                });                
                console.log("Load:", this.state.isValidLoaded, "Data:", this.state.validData);
            },
            (validError) => {
                this.setState({
                  isValidLoaded: true,
                  validError
                });
                console.log("Load:", this.state.isValidLoaded, "validError:", this.state.validError);
            }
        );
    };

    isDeleteOk() {
        this.setState({
            deleteOk: true
        });
        console.log(this.state.deleteOk);
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isValidate !== this.state.isValidate) {
            this.validData(this.state.isValidate);
        };

        if(prevState.isEditing === true) {
            this.props.fetchData();
        };

        if(this.state.deleteOk === true) {
            this.props.fetchData();
        };
    };

    render() {
        const local = "http://localhost:3050/";

        if(this.state.isEditing === false) {
            return(
                <li className='listAdminShelters'>
                {this.state.isDeleting ? <PopUpDelete name={this.props.item.name} id={this.props.dataId} Delete={this.isDelete} isDeleting={this.state.isDeleting} isDeleteOk={this.isDeleteOk}/> : null}
                    <div className='itemHeader'>
                        <h3 className='itemTitle'>{this.props.item.name}</h3>
                        <div className='imgContainer'>
                            <img src={this.state.isValidate ? Accepted : Accept} alt='Icône Accept' onClick={this.isValidate}/>
                            <img src={Edit} alt='Icône Edit' onClick={this.isEdit}/>
                            <img src={Bin} alt='Icône Bin' onClick={this.isDelete}/>
                        </div>
                    </div>
                    <div className='itemBody'>
                        <img src={local + this.props.item.logo} alt='Logo du refuge'/>
                        <ul className='infos'>
                            <li><span>Spécialité(s) :</span> {this.props.item.specializeAt && this.props.item.specializeAt.map((item) => { return `  ${item}`})}</li>
                            <li><span>Adresse :</span> {this.props.item.address}</li>
                            <li><span>Email :</span> {this.props.item.email} </li>
                            <li><span>Téléphone 01 :</span> {this.props.item.phone01}</li>
                            <li style={this.props.item.phone02 ? {display: 'inline'} : {display: 'none'}}><span>Téléphone 02 :</span> {this.props.item.phone02}</li>
                        </ul>
                        <p className='description'>
                            {this.props.item.description}
                        </p>
                    </div>
                </li>
            );
        } else {
            return <ListItemForm 
                data={this.props.item} 
                dataId={this.props.dataId} 
                isValid={this.state.isValidate} 
                isEditing={this.state.isEditing} 
                isValidate={this.isValidate} 
                isEdit={this.isEdit}
            />
        };
    };
};

export default ListItem;