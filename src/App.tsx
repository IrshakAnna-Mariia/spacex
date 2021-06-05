import React, {useContext} from 'react';
import {Button} from "@material-ui/core";
import {SmthBtn} from './styles';
import { useGetLaunchesPast } from './fetchLaunches/fetchLaunchesPast';
import { useGetLaunchesUpcoming } from './fetchLaunches/fetchLaunchesUpcoming';
import LaunchesContext from "./context";
import Element from "./Element";

const App: React.FunctionComponent = () => {
    const launchesPast = useGetLaunchesPast();
    const launchesUpcoming = useGetLaunchesUpcoming();

    //console.log(launchesPast, launchesUpcoming);
    return (
        <LaunchesContext.Provider value={{launchesPast, launchesUpcoming}}>
            <Element/>
        </LaunchesContext.Provider>
    );
};

export default App;
