import {gql, useQuery} from '@apollo/client';
import {Launch} from './interface/Launch';

const LAUNCHES_UPCOMING = gql`
    query useGetLaunchesUpcoming($limit: Int!) {
        launchesUpcoming(limit: $limit) {
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            rocket {
                rocket_name
                first_stage {
                    cores {
                        flight
                        core {
                            reuse_count
                            status
                        }
                    }
                }
            }
            ships {
                name
                home_port
                image
            }
        }
    }
`;

export const useGetLaunchesUpcoming = () : Launch[] | undefined => {
    const {data} = useQuery(LAUNCHES_UPCOMING, {
        variables: {limit: 10}
    });
    return data?.launchesUpcoming;
}