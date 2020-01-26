import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Quote from '../components/Quote'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
}));

export default function Landing() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Software Engineer Studio
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'This is where I collect my madness.'}
                </Typography>
                <Quote />
                <Typography variant="body1">Enter at your own risk</Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}