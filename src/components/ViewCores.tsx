import React from "react";

interface Cores {
    flight: number;
    core: {
        reuse_count: number;
        status: string;
    }
}

const ViewCores = ({value, index}: { value: Cores, index: number }) => {

    return (
        <div key={index}>
            {(value.flight ) ? `First stage (cores): flight - ${value.flight};` : null}
            <br/>
            {value.core ? <>

                {(value.core.reuse_count) ? `Reuse count (core) - ${value.core.reuse_count};` : null}
                <br/>
                {(value.core.status) ? `status (core) - ${value.core.status}` : null}
            </> : null}
        </div>
    )
}

export default ViewCores;