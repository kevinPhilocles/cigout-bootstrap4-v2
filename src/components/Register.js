import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import {authenticationManager} from "./Authentication";
import { Formik, Field, Form } from 'formik';
import {TextField} from 'formik-material-ui';
import PasswordStrength from './PasswordStrength';
import * as Yup from 'yup';
import './css/register.css'

class Copyright extends React.Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    Cigout
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
}

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            password: '',
            buttonForm: '1'
        }
    }
    
    render() {
        const { password } = this.state;
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Inscription
                    </Typography>
                    
                    <Formik
                        initialValues={{
                            email: '',
                            username: '',
                            firstname: '',
                            lastname: '',
                            password: ''
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().required('Email requis'),
                            username: Yup.string().required('Nom d\'utilisateur requis'),
                            firstname: Yup.string().required('Prénom requis'),
                            lastname: Yup.string().required('Nom requis'),
                            password: Yup.string().required('Mot de passe requis')
                        })}
                        onSubmit={({ email, username, password }, { setStatus, setSubmitting }) => {
                            setStatus();
                                authenticationManager.register(email, username, password)
                                .then(
                                message => {
                                    this.props.history.push('/login');
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );
                                    
                        }}
                        render={({ errors, status, touched, isSubmitting, handleChange, handleBlur, values}) => (
                            <Form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={TextField}
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            required
                                            fullWidth
                                            label="Prénom"
                                            autoComplete="fname"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={TextField}
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            required
                                            fullWidth
                                            label="Nom de famille"
                                            autoComplete="lname"
                                        />                                      
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Field
                                            component={TextField}
                                            id="username"
                                            name="username"
                                            type="text"
                                            required
                                            fullWidth
                                            label="Nom d'utilisateur"
                                            autoComplete="username"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            component={TextField}
                                            id="email"
                                            name="email"
                                            type="email"
                                            className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                            required
                                            fullWidth
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            label="Email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <br></br>
                                    <br></br>
                                    <Grid item xs={12}>  {/*ISSUE WITH HANDLE CHANGE AND FORMIK*/}

                                        <Field
                                            component={TextField}
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            fullWidth
                                            label="Mot de passe"
                                            autoComplete="password"
                                            onChange={event => this.setState({ password: event.target.value })}
                                            onKeyUp={handleChange}
                                        />
                                    </Grid>
                                    <PasswordStrength password={password} /> 

                                    <Grid item xs={12}>
                                        <Field
                                            component={TextField}
                                            id="date"
                                            name="date"
                                            type="date"
                                            required
                                            label="Date de naissance"
                                            fullWidth={true}
                                            defaultValue="2012-12-12"
                                            autoComplete="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="Je confirme avoir 18 ans ou plus."
                                            required
                                        />
                                    </Grid>
                                </Grid>
                                <br></br>
                                <div class="col text-center">
                                <Button
                                        type="submit"
                                        fullWidth
                                        class="btn btn-custom-register btn-lg page-scroll"
                                        variant="contained"
                                        name="form-classic"
                                        className={classes.submit}>
                                    S'inscrire
                                </Button>
                                </div>
                                <br></br>
                                <br></br>
                                <div class="row justify-content-center">
                                <Button
                                        fullWidth
                                        class="btn btn-custom-register-google btn-block"
                                        variant="contained"
                                        name="form-google"
                                        href="https://cigout-backend.herokuapp.com/auth/google"
                                        >
                                    Connexion avec google
                                </Button>
                                </div>
                            </Form>
                        )}
                    />
                   <br></br>
                    <Grid item>
                        <Link href="/login" variant="body2">
                            {"Je possède déjà un compte Cigout"}
                        </Link>
                    </Grid>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}
export default withStyles(styles)(Register);