import React from 'react';
import {useGetLaunchesPast} from './fetchLaunches/fetchLaunchesPast';
import {useGetLaunchesUpcoming} from './fetchLaunches/fetchLaunchesUpcoming';
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import LaunchesView from "./LaunchesView";

const App: React.FunctionComponent = () => {
    const launchesPast = useGetLaunchesPast();
    const launchesUpcoming = useGetLaunchesUpcoming();
    console.log(launchesPast, launchesUpcoming)

    return (
        <div>
            <AppBar style={{position: "relative"}}>
                <Container fixed>
                    <Toolbar>
                        <Typography variant={'h5'}>
                            SpaceX
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Typography variant={'h6'} align={'center'} color={'primary'}>
                Launches Past
            </Typography>
            {(launchesPast !== undefined) ? <LaunchesView array={[...launchesPast]}/> : null}
            <Typography variant={'h6'} align={'center'} color={'primary'}>
                Launches Upcoming
            </Typography>
            {(launchesUpcoming !== undefined) ? <LaunchesView array={[...launchesUpcoming]}/> : null}
        </div>
    );
};

export default App;
