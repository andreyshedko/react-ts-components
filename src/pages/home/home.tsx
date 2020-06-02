import React from "react";

import { BadgeComponent } from "../../components/badge/badge.component";
import styles from './home.module.css';


const HomeComponent = () => (
    <main className={styles.components}>
        <BadgeComponent url={'/badge'} bodyText={"Badge Component"} severity={"info"} />
        <BadgeComponent url={'/card'} bodyText={"Card Component"} severity={"info"} />
        <BadgeComponent url={'/input'} bodyText={"Input Component"} severity={"info"} />
        <BadgeComponent url={'/spinner'} bodyText={"Spinner Component"} severity={"info"} />
        <BadgeComponent url={'/select'} bodyText={"Select Component"} severity={"info"} />
        <BadgeComponent url={'/notfound'} bodyText={"Not Found Component"} severity={"info"} />
        <BadgeComponent url={'/notauthorized'} bodyText={"Not Authorized Component"} severity={"info"} />
        <BadgeComponent url={'/notauthorized'} bodyText={"Not Authorized Component"} severity={"info"} />
        <BadgeComponent url={'/modal'} bodyText={"Modal Component"} severity={"info"} />
        <BadgeComponent url={'/toastr'} bodyText={"Toastr Component"} severity={"info"} />
        <BadgeComponent url={'/table'} bodyText={"Table Component"} severity={"info"} />
        <BadgeComponent url={'/upload'} bodyText={"Upload Component"} severity={"info"} />
        <BadgeComponent url={'/button'} bodyText={"Button Component"} severity={"info"} />
        <BadgeComponent url={'/date-picker'} bodyText={"Date Picker Component"} severity={"info"} />
        <BadgeComponent url={'/time-picker'} bodyText={"Time Picker Component"} severity={"info"} />
        <BadgeComponent url={'/icon'} bodyText={"Icon Component"} severity={"info"} />
        <BadgeComponent url={'/progress-bar'} bodyText={"Progress Bar Component"} severity={"info"} />
        <BadgeComponent url={'/tabs'} bodyText={"Tabs Component"} severity={"info"} />
        <BadgeComponent url={'/toggle'} bodyText={"Toggle Component"} severity={"info"} />
    </main>
)

export default HomeComponent;