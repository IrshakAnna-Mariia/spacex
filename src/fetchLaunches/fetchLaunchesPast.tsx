import {gql, useQuery} from '@apollo/client';
import {Launch} from './interface/Launch';

const LAUNCHES_PAST = gql`
    query useGetLaunchesPast($limit: Int!) {
        launchesPast(limit: $limit) {
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            links {
                video_link
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

export const useGetLaunchesPast = () : Launch[] | undefined => {
    const {data} = useQuery(LAUNCHES_PAST, {
        variables: {limit: 20}
    });
    return data?.launchesPast;
}