import React from "react";

import { CardComponent } from "../../components/card/card.component";
import { ButtonComponent } from "../../components/button/button.component";
import { utils } from "../../utils";

const actions = () => (
    <>
        <ButtonComponent text="Action 1" severity="danger" />
        <ButtonComponent text="Action 2" severity="warning" />
    </>
)

export const CardInfoComponent:React.FC<{}> = () => {

    return (
        <div className={['container', 'col-3'].join(' ')}>
            <CardComponent
                title="All sections card example"
                subTitle="Sub Title"
                imgUrl="https://picsum.photos/seed/picsum/300/300"
                body={utils.lorem}
                action={actions()} />
            <CardComponent
                title="No image card example"
                subTitle="Sub Title"
                body={utils.lorem}
                action={actions()} />
            <CardComponent
                title="No action card example"
                subTitle="Sub Title"
                imgUrl="https://picsum.photos/seed/picsum/300/300"
                body={utils.lorem} />
        </div>)
};