import React, { PureComponent } from "react";

import { AccordionItemComponent, AccordionItem } from "../accordion-item/accordion-item.component";

export interface AccordionComponentProps {
    items: AccordionItem[];
}

export interface AccordionComponentState {
    items: AccordionItem[];
}

export class AccordionComponent extends PureComponent<AccordionComponentProps, AccordionComponentState> {

    state: Readonly<AccordionComponentState> = {
        items: []
    };

    componentDidMount() {
        this.setState({items: this.props.items});
    }

    setComponentsState(index: number) {
        // Close all but not on this index
        this.setState(prevState => ({
            items: [...prevState.items.map((item, _index) => {
                if (index === _index) {
                    item.isOpened = !item.isOpened;
                } else {
                    item.isOpened = false;
                }
                return item;
            })
        ]
        }));
    }

    render() {
        return (
            <>
                {this.state.items.map((item: AccordionItem, index) => {
                    return (
                        <>
                            <AccordionItemComponent
                                key={index}
                                isOpened={item.isOpened}
                                config={item}
                                onClick={() => {
                                    this.setComponentsState(index)
                                }} />
                        </>
                    )
                })
                }
            </>
        )
    }
};