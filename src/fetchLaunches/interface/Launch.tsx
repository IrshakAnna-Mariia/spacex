export interface Launch{
    mission_name: string;
    launch_date_local: Date;
    launch_site: {
        site_name_long: string;
    }
    links: {
        article_link: string;
        video_link: string;
    }
    rocket: {
        rocket_name: string;
        first_stage: {
            cores: {
                flight: number;
                core: {
                    reuse_count: number;
                    status: string;
                }
            }
        }
    }
    ships: {
        name: string;
        home_port: string;
        image: string;
    }
}