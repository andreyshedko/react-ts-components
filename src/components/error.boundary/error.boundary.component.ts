import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // logErrorToMyService(error, errorInfo);
        console.log(error, errorInfo)
    }

    render() {
        return this.props.children;
    }
}