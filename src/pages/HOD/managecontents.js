import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps, stateKeys} from "../../redux/actions";
import illustration from "../../assets/images/illus.png"
import * as Unicons from '@iconscout/react-unicons';
import Endpoint from "../../utils/endpoint";
import toast, {Toaster} from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
// import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Modal, Avatar, Col, Divider, Drawer, List, Row, message, Upload} from "antd"
import {MDBDataTableV5} from "mdbreact";
import $, { data } from "jquery"
import Spinner from "../Front/Spinner"
import { PulseSpinner } from "react-spinners-kit";
import { enquireScreen } from "enquire-js";
import {Link} from "react-router-dom";
import { PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";

let userArr = []

const DescriptionItem = ({ title, content }) => (
	<div className="site-description-item-profile-wrapper mb-2">
	  <p className="site-description-item-profile-p-label" style={{fontSize:"13px", fontWeight:"700"}}>{title}:</p>
	  {content}
	</div>
  );
  const allLgas = [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala Ngwa North",
    "Isiala Ngwa South",
    "Isiukwuato",
    "Obi Ngwa",
    "Ohafia",
    "Osisioma Ngwa",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "Umuahia South",
    "Umunneochi"
]
class ManageContents extends Component {
	state = {
		pageLoading: false,
		allInstructors: [],
		newInstructor: false,
		newInstructorFormIncomplete: false,
		newFirstName: '',
		newLastName: '',
		newOtherName: '',
		newEmail: '',
	};
	handleInput = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };
	 showDrawer = () => {
		this.setState({
		showDraw:true	
		})
	  };
	
	   onClose = () => {
		this.setState({
			showDraw:false	
			})
	  };

	closePop = () => {
$("#recruitment__pop").fadeOut()

	}
	newInstructorSuccess = () => toast.success("Instructor added successfully", {
		style: {
			border: '1px solid #56b39d',
			padding: '16px',
			background: '#56b39d',
			color: '#fff',
			borderRadius: '2rem',
		},
		iconTheme: {
			primary: '#FFFAEE',
			secondary: '#56b39d',
		},
	});
	
	loadDataError = (error) => toast.error(error, {
		style: {
			border: '1px solid #DC2626',
			padding: '16px',
			background: '#DC2626',
			color: '#fff',
			borderRadius: '3rem',
		},
		iconTheme: {
			primary: '#FFFAEE',
			secondary: '#DC2626',
		},
	});
	closeYouthWing = () => {
        $("#recruitment__pop").fadeOut()
        this.setState({submissionType:null})

    }
	toggleNewInstructor = () => {
		this.setState({newInstructor: !this.state.newInstructor})
	};
	
     handleChange = ({ fileList }) => {
        this.setState({ fileList });
        setTimeout(() => {
            console.log(fileList);
        }, 2000);
    };
     dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);
    };
    beforeUpload = (file) => {
        const isJpgOrPng = true;
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        console.log(file, "file before");
        setTimeout(() => {
        }, 1500);

        return isJpgOrPng && isLt2M;
    };
    handleSaveNews = (e) => {
        e.preventDefault()
        let formData = new FormData;

        formData.append("Title", this.state.newstitle);
        formData.append("NewsText", this.state.newstext);
		formData.append("ImageUrl", this.state.newsAttachment);

        // if(this.state.title == nu)
        $("#preloader").fadeIn()
		
        Endpoint.postSaveNews(formData)
            .then((res) => {
                console.log(res)
                alert("Content saved and uploaded!")
                $("#preloader").fadeOut()
            })
            .catch((error) => {
                $("#preloader").fadeOut()
                alert("Oops, something went wrong")
                this.setState({ loading: false })
            });
    }
	componentDidMount() {
        $("#preloader").fadeOut();
		enquireScreen((b) => {
            this.setState({
                isMobile: b
            })
        });
		//this.loadUsers();

		// this.loadDataFromServer();
	}
	// postQueryRequest = () => {
	// 	if(this.state.filtertype == "lga"){
	// 		this.loadUsersByLGA(this.state.lga)
	// 	}
	// 	else if(this.state.filtertype == "formtype"){
	// 		this.loadUsersByFormType(this.state.selectformtype)
	// 	}
	// 	else if(this.state.filtertype == "gender"){
	// 		this.loadUsersByGender(this.state.gender)
	// 	}
	// 	else if(this.state.filtertype == "haspvc"){
	// 		this.loadUsersByPVC(this.state.pvcSelect)
	// 	}
	// }
	handleShowSelectModal = () => {
		this.setState({
			filterOpen:!this.state.filterOpen
		})
	}
    handleAttachment = (e) => {
        console.log(e.target)
        console.log(e)
        console.log(e.target.files[0])
        this.setState({
            newsAttachment: e.target.files[0]
        })
    }
	render() {
		const {isMobile} = this.state
		return (
			<>
		
			

<div id="preloader">
                <div id="status">
                    <center>
                        <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />

                    </center>
                </div>
            </div>
				{this.state.pageLoading ?
					<Spinner
						message={"Just a moment"}
					/>
					: null
				}
				
				<Toaster
					position="top-center"
					reverseOrder={false}
				/>
				<form onSubmit={(e) => this.handleSaveNews(e)}>
				<div className="container-fluid py-5">
					<div className="d-flex flex-wrap justify-content-between">
						<h1 className="mb-3 mr-2 my-auto" style={{fontSize:"16px"}}>
							<Unicons.UilBookAlt size="26" className="mr-2"/>
							Content Management (News and media)
						</h1>
						
						{/* <button className="btn btn-primary btn-sm" style={{background:"#410d0d"}} onClick={this.handleShowSelectModal}>
							<i className="fa fa-filter"/> Filter
						</button> */}
					</div>
					
					<hr/>
					<div className='row justify-content-center'>
                        <div className='col-sm-5'>
                            <div className='form-group'>
                                <label className='label-control'>Title</label>
                                <input required onChange={this.handleInput} name="newstitle" type={"text"} className="form-control"/>

                            </div>
                        </div>

                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-sm-5'>
                            <div className='form-group'>
                                <label className='label-control'>Body</label>
                                <textarea required onChange={this.handleInput} name="newstext" className='form-control' style={{minHeight:"300px"}}>

                                </textarea>

                            </div>
                        </div>

                    </div>
                    <div className='row justify-content-center'>
                  
                        <div className='col-sm-5'>
                            <div className='form-group'>
                                <label className='label-control'>Image</label>
                                <input required type={"file"} onChange={this.handleAttachment} className="form-control"/>

                            </div>
                        </div>

                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-sm-5'>
                           <button className='btn btn-success' style={{width:"100%"}}>Submit</button>
                        </div>

                    </div>
				</div>
				
				</form>
			
			</>
		
		)
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContents);
