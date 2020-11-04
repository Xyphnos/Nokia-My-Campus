/*
    This function holds all the widgets for the app
    like Homepage 
*/
import React, { Fragment, useState, useEffect } from 'react';
import { Card, Dialog, DialogTitle, List, ListItem, ListItemText, CardContent  } from '@material-ui/core';
import strings from '../localization';
import WidgetStyle from '../styles/widgetStyle';
import PropTypes from 'prop-types';
import ProgressBarFragments from '../fragments/ProgressBarFragments';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';

const Widgets = (props) => {
    const classes = WidgetStyle().widgetStyle();
    const barTheme = WidgetStyle().barTheme();
    const {ProgressBar} = ProgressBarFragments();
    const {getUsageData} = API();
    const {parkingP5Url, restaurantUrl, parkingP10Url, parkingP10TopUrl} = ApiUrls();


    // States
  const [restaurantData, setRestaurantData] = useState(undefined);
  const [parkingP5Data, setParkingP5Data] = useState(undefined);
  const [parkingP10Data, setParking10Data] = useState(undefined);
  const [parkingP10TopData, setParkingP10TopData] = useState(undefined);
  const [parkingP10ElectricData, setParkingP10ElectricData] = useState(undefined);
  const multiplier = 2;

  /*eslint-enable */
  useEffect(()=> {
    getUsageData(parkingP5Url, props).then(result => setParkingP5Data(result.percent));
    getUsageData(restaurantUrl, props).then(result => setRestaurantData(result.fill_percent));
    getUsageData(parkingP10Url, props).then(result => setParking10Data(result.percent));
    getUsageData(parkingP10TopUrl, props).then((result) => {setParkingP10TopData(result.percent); setParkingP10ElectricData(result.percent*multiplier)});
  },[]); //eslint-disable-line

  
  /*
  barWidgets is the list which will be presented for SelectViewDialog and HomepageWidget.
  This list is supposed to contain all widgets that are shown on the list whne clicking the '+' symbol
  */
  const barWidgets = [
    {navigationUrl: '/restaurant', barLabel: strings.topBarMenuItemRestaurant, utilization: strings.liveUtilization, data: restaurantData, barTheme},
    {navigationUrl: '/p5', barLabel: strings.p5inside, utilization: strings.liveUtilization, data: parkingP5Data, barTheme},
    {navigationUrl: '/p10', barLabel: strings.p10inside, utilization: strings.liveUtilization, data: parkingP10Data, barTheme},
    {navigationUrl: '/p10', barLabel: strings.p10rooftop, utilization: strings.liveUtilization, data: parkingP10TopData, barTheme},
    {navigationUrl: '/p10', barLabel: strings.p10electric, utilization: strings.liveUtilization, data: parkingP10ElectricData, barTheme},
  ];

  // This list contains only one picture, the symbol '+'
  const defaultWidgetPicture = [
      require('../assets/plus_sign.png')
    ];
  
    // Creates a item of every widget for the Dialog on front page
    const SelectViewDialog = (props) => {
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
       };
   
       const handleListItemClick = (value) => {
           onClose(value);
       };

        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">{strings.dialogTitel}</DialogTitle>
                <List>
                    {barWidgets.map((barWidget) => (
                        <ListItem button onClick={() => handleListItemClick(barWidget)} key={barWidget}>

                            <ListItemText secondary={barWidget.barLabel} />

                        </ListItem>
                    ))};
                </List>
            </Dialog>
        );
    };

    //Handling selecViewDialogs' closing, opening and saves the selected value
    SelectViewDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired,
      };

    /*
        The HomepageWidget gets a default value of selectedValue, which is a state,
        the default value of the state will be first on the barWidgets list which is at the start of the code
        the default value should be plus_sign.png from src/assets folder
    */
    const HomepageWidget = () => {
        const [selectedValue, setSelectedValue] = useState(defaultWidgetPicture);
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
          };
        
        const handleClose = (value) => {
            setOpen(false);
            setSelectedValue(value);
          };
          
        
        
        /*
        The returned fragment is here, it get the values from above funtion SelectViewDialog
        */
       if(selectedValue == defaultWidgetPicture) {
        return (
            <Fragment>
                <Card className={classes.card} onClick={handleClickOpen}>
                    <CardContent>
                        <img src={selectedValue} />
                    </CardContent>
                </Card>
                <SelectViewDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </Fragment>
        )
       } else {
        return (
            <Fragment>
                <Card className={classes.card} onClick={handleClickOpen}>
                    <CardContent>
                        {ProgressBar(selectedValue)}
                    </CardContent>
                </Card>
                <SelectViewDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </Fragment>
        )};
    };

    return {
        HomepageWidget: HomepageWidget
        };
};

export default Widgets;
