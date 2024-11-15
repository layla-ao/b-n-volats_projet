import React, { useState, useEffect, useReducer, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function profileRegister(myprofile, action) {
    const dataProfile = JSON.parse(localStorage.getItem("myProfile"));
    const info = JSON.parse(localStorage.getItem("myInfo"));

    switch (action.type) {
        case 'field': {
            return {
                ...myprofile,
                [action.fieldName]: action.payload,
            };
        }
        case 'success': {
            return {
                fname: info.firstname,
                lname: info.lastname,
                email: info.email,
                mobile_number: dataProfile.mobile_number,
                dob: dataProfile.dob,
                about: dataProfile.about,
                location: dataProfile.location,
                gender: dataProfile.gender,
                address: dataProfile.address,
            };
        }
        default:
            return myprofile;
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9),
    },
}));

const Profile = () => {
    const paperStyle = { padding: '20px 20px', width: 800, height: 550, margin: "30px auto" };
    const btnstyle = { margin: '10px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', height: '20%' };
    const gridStyle = { backgroundColor: '#Faf0e6', height: 630, margin: "0px 0px", padding: '0px 0px' };
    const classes = useStyles();

    const dataInfo = JSON.parse(localStorage.getItem("myInfo"));
    const initialValues = {
        fname: dataInfo.firstname,
        lname: dataInfo.lastname,
        email: dataInfo.email,
        mobile_number: '',
        dob: { Date },
        about: '',
        location: '',
        gender: '',
        address: '',
    };

    const [myprofile, setMyprofile] = useReducer(profileRegister, initialValues);
    const { email, mobile_number, about, location, address, gender, dob } = myprofile;
    const [success, setSuccess] = useState(false);
    const [mesg, setMesg] = useState('');
    const [open, setOpen] = useState(false);
    const id = dataInfo.id;
    let history = useHistory();

    useEffect(() => {
        axios.get(`/account/getProfile/${id}`)
            .then(res => {
                const pro = res.data;
                localStorage.setItem('myProfile', JSON.stringify(pro));
                setMyprofile({ type: 'success' });
            })
            .catch(() => {
                setMyprofile({ type: 'error' });
            });
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = { email, mobile_number, dob, about, gender, location, address };

        axios.post("/account/saveProfile", user)
            .then(response => {
                if (response.status === 200) {
                    setSuccess(true);
                    setMesg("Profile Updated!");
                    setOpen(true);
                }
            })
            .catch(error => {
                setOpen(true);
                setMesg(error.response?.data?.message || "Something went wrong");
            });
    };

    const handleClose = () => {
        setOpen(false);
        if (success) history.push('/apphome');
    };

    const validationSchema = Yup.object().shape({
        mobile_number: Yup.string().matches(/^[7-9]\d{9}$/, "Enter valid phone number").required("Required"),
        about: Yup.string().required("Required"),
        dob: Yup.date().required("Required"),
        location: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
    });

    return (
        <Grid style={gridStyle}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='h6' color="textSecondary" align="center">Profile</Typography>
                </Grid>
                <br />
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Field as={TextField} label='First Name' name="fname" disabled value={dataInfo.firstname} required />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field as={TextField} label='Last Name' name="lname" disabled value={dataInfo.lastname} required />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field as={TextField} label='Email Id' name="email" disabled value={dataInfo.email} required />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field as={TextField} label='Mobile Number' name="mobile_number" required value={mobile_number}
                                        error={props.errors.mobile_number && props.touched.mobile_number}
                                        onChange={e => setMyprofile({ type: 'field', fieldName: 'mobile_number', payload: e.currentTarget.value })}
                                        helperText={<ErrorMessage name="mobile_number" />} />
                                </Grid>
                                <Grid item xs={6}>
                                    <DatePickerComponent name="dob" value={dob} format="yyyy/MM/dd" placeholder="Date of Birth" width="180px" required
                                        onChange={(e) => setMyprofile({ type: 'field', fieldName: 'dob', payload: e.target.value })} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field as={TextField} label='About volunteer' name="about" required value={about}
                                        onChange={(e) => setMyprofile({ type: 'field', fieldName: 'about', payload: e.currentTarget.value })}
                                        helperText={<ErrorMessage name="about" />} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field as={TextField} label='Location' name="location" required value={location}
                                        onChange={(e) => setMyprofile({ type: 'field', fieldName: 'location', payload: e.currentTarget.value })}
                                        helperText={<ErrorMessage name="location" />} />
                                </Grid>
                                <Grid item xs={6}>
                                    <label>Gender</label><br />
                                    <input type="radio" label="Male" checked={gender === "Male"} value="Male" name="gender"
                                        onChange={(e) => setMyprofile({ type: 'field', fieldName: 'gender', payload: e.currentTarget.value })} /> Male
                                    <input type="radio" label="Female" checked={gender === "Female"} value="Female"
                                        onChange={(e) => setMyprofile({ type: 'field', fieldName: 'gender', payload: e.currentTarget.value })} /> Female
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField} label='Address' name="address" required fullWidth value={address}
                                        onChange={(e) => setMyprofile({ type: 'field', fieldName: 'address', payload: e.currentTarget.value })}
                                        helperText={<ErrorMessage name="address" />} />
                                </Grid>
                            </Grid>
                            <Button type='submit' color='primary' variant="contained" style={btnstyle} disabled={props.isSubmitting}
                                fullWidth>{props.isSubmitting ? "Loading" : "Submit"}</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
            <Snackbar
                className={classes.root}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={mesg}
                action={
                    <Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Fragment>
                }
            />
        </Grid>
    );
}

export default Profile;
