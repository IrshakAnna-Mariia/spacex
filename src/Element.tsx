import React, {useContext} from 'react';
import {Button} from "@material-ui/core";
import {SmthBtn} from './styles';
import LaunchesContext from "./context";

const Element: React.FunctionComponent = () => {
    const {launchesPast, launchesUpcoming} = useContext(LaunchesContext)
    console.log(launchesPast, launchesUpcoming)
    return (
        <div>
            <Button color='primary'>
                Hello ts
            </Button>
            <SmthBtn>
                dfhgj
            </SmthBtn>
        </div>
    );
};

export default Element;
