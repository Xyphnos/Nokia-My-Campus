import React, {useState} from "react";

import p10Styles from '../styles/p10Styles'
import commonStyles from "../styles/commonStyles";
import '../styles/App.css';
import '../styles/p10Style.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from '@material-ui/core/Box';
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Navibar from "../fragments/topNavigationbar";

function TabFragmentHistory(props) {
    const {children, value, index, ...other} = props;
    const [selectedDate, setSelectedDate] = useState(new Date(2020, 4, 2));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <div
            component="div"
            role="tabfragment"
            hidden={value !== index}
            id={`tabfragment-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}>
            <Typography>
                {value === index && <Box p={5}>{children}</Box>}
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="dialog date picker"
                    label="Date picker"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
}

function TabFragmentLive(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            component="div"
            role="tabfragmentlive"
            hidden={value !== index}
            id={`tabfragmentlive-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            <Typography>
                {value === index && <Box p={5}>{children}</Box>}
            </Typography>
            <ProgeBar variant="determinate">
            </ProgeBar>
            <ProgeBar variant="determinate">
            </ProgeBar>
            <ProgeBar variant="determinate">
            </ProgeBar>
        </div>
    );
}

function ProgeBar() {
    const classes = p10Styles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0} justify="space-between">
                <Grid item xs={12} spacing={0}>
                    <div className={classes.progressLabel}>
                        <span>Application</span>
                    </div>
                    <UtilLinearProgress variant="determinate" value={50}/>
                </Grid>
            </Grid>
        </div>
    )
}

const UtilLinearProgress = withStyles({
    root: {
        height: 50,
        width: "90%",
        justifyContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "1em",
        backgroundColor: "white",
    },
    bar: {
        backgroundColor: "#DAEDFB"
    }
})(LinearProgress);

const P10 = () => {
    const p10classes = p10Styles();
    const commonClasses = commonStyles();
    const [value, setValue] = React.useState(0);
    const {TopNavigationbar} = Navibar();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container component="main" maxWidth="lg" id="mainContainer">
            <div>
                {TopNavigationbar()}
                <p>P10 Placeholder</p>
            </div>
            <div className="p10">
                <Typography className={p10classes.p10title} component="h1" variant="h5">P10</Typography>
            </div>
            <TabFragmentLive value={value} index={0}>
                Live
            </TabFragmentLive>
            <TabFragmentHistory value={value} index={1}>
                History
            </TabFragmentHistory>
            <Tabs
                value={value}
                onChange={handleChange}
                className={commonClasses.bottomTabs}
                variant="fullWidth"
                indicatorColor="#008AFF"
            >
                <Tab id="live" label="Live"/>
                <Tab id="history" label="History"/>
            </Tabs>
        </Container>
    );
};

export default P10