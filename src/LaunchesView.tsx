import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import {Launch} from "./fetchLaunches/interface/Launch";
import ViewCores from "./components/ViewCores";
import ViewShips from "./components/ViewShips";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const LaunchesView = ({array}: { array: Launch[] }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Date local</TableCell>
                        <TableCell align="left">Site</TableCell>
                        <TableCell align="left">Links</TableCell>
                        <TableCell align="left">Rocket</TableCell>
                        <TableCell align="left">Ships</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {array.map((value) => (
                        <>
                            <TableRow key={value.mission_name}>
                                <TableCell align="left">{value.mission_name}</TableCell>
                                <TableCell align="left">{value.launch_date_local}</TableCell>
                                <TableCell align="left">
                                    Long name: {value.launch_site.site_name_long}
                                </TableCell>
                                <TableCell align="left">{(value.links !== undefined) ?
                                    <>
                                        Video: {<a href={value.links.video_link} target={'_blank'}>{value.links.video_link}</a>}</>
                                    : null}
                                </TableCell>

                                <TableCell align="left">
                                    {(value.rocket.rocket_name) ? `Name : ${value.rocket.rocket_name}` : null}
                                    <br/>
                                    {value.rocket.first_stage.cores ? value.rocket.first_stage.cores.map((value, index) => (
                                        <ViewCores value={value} index={index}/>
                                    )) : null}
                                </TableCell>
                                <TableCell align="left">
                                    {value.ships ? value.ships.map((value, index) => (
                                        <ViewShips value={value} index={index}/>)) : null}
                                </TableCell>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LaunchesView;

