
import styled from "styled-components";

type NotificationProps = {
    readonly severity: 'info' | 'warning' | 'danger',
    readonly disabled?: boolean
}

const severity = new Map([
    ['info', '#007bff'],
    ['warning', '#ff9f1c'],
    ['danger', '#e63946']]
)

export const Button = styled.button<NotificationProps>`
    color: #fff;
    border: none;
    border-radius: calc(1rem / 6);
    padding: calc(1rem / 2);
    cursor: pointer;
    background-color: ${props => props.disabled ? '#bfbfbf' : severity.get(props.severity)};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        color: #7b7b7b;
        border: 1px solid #7b7b7b;
    }

    &:disabled:hover {
        cursor: not-allowed;
    }

    svg {
        margin-right: .5rem;
    }
`;

export const Notification = styled.span<NotificationProps>`
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 2px 5px;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    background-color: ${props => severity.get(props.severity)};
`;