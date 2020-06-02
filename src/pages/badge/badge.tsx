import * as React from "react";
import { BadgeComponent } from "../../components/badge/badge.component";

export const BadgeInfoComponent = () => {
    return (
        <div className={['container', 'col-3'].join(' ')}>
            <BadgeComponent url="/" bodyText="Severity info example" severity={"info"} />
            <BadgeComponent url="/" bodyText="Severity warning example" severity={"warning"} />
            <BadgeComponent url="/" bodyText="Severity danger example" severity={"danger"} />
        </div>)
};