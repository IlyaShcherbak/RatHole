// Core
import styled from 'styled-components';

export const MessageBox = styled.div`
    display: flex;

    &.sender {
        justify-content: flex-end;
    }
`;

export const MessageBoxContainer = styled.div`
    width: 100%;

    .sender & {
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`;

export const MessageBoxUsername = styled.div`
    margin: 2px 20px;

    .sender & {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
`;

export const MessageContent = styled.div`
    position: relative;
    margin-left: 20px;
    margin-bottom: 10px;
    padding: 15px 10px;
    background-color: #A8DDFD;
    max-width: 60%;
    width: fit-content;
    min-width: 160px;
    text-align: left;
    font: 400 .9em 'Open Sans', sans-serif;
    border: 1px solid #97C6E3;
    border-radius: 10px;
    overflow-wrap: break-word;

    ::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 15px solid #A8DDFD;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        top: 0;
        left: -15px;
    }

    ::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 17px solid #97C6E3;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        top: -1px;
        left: -17px;
    }

    .sender & {
        margin-right: 20px;
        margin-left: 0;
        background-color: #f8e896;
        border-color: #dfd087;

        ::after {
            border-top-color: #f8e896;
            right: -15px;
            left: auto;
        }

        ::before {
            border-top-color: #dfd087;
            right: -17px;
            left: auto;
        }

    }
`;

export const MessageText = styled.p`
    padding: 0;
    margin: 0 0 10px;
`;

export const MessageTime = styled.div`
      position: absolute;
      font-size: .85em;
      font-weight: 300;
      margin-top: 10px;
      bottom: 0px;
      right: 5px;
`;

export const MessageStatus = styled(MessageTime)({
    color:        'grey',
    right:        'auto',
    marginBottom: 2,
});
