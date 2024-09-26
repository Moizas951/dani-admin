import styled from 'styled-components';

export const ButtonGroup = styled.div`
    display: flex;
`;

export const RadioButton = styled.button<{ selected?: boolean }>`
    border-radius: 30px;
    margin-right: 16px;
    padding: 0 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: none;
    cursor: pointer;
    outline: none;
    width: 120px;

    ${({ selected }) =>
        selected
            ? `
      background-color: #CC8D3E;
      color: white;
    `
            : `
      background-color: #f5f5f5;
      color: black;
    `}

    &:hover {
        opacity: 0.8;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 98%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const ImageUploadContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageUploadBox = styled.div`
    width: 100%;
    height: 200px;
    border: 2px dashed #ffa940;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 100px;
`;

export const BannerImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContentImg = styled.div`
    width: 304px;
    height: 304px;
    margin-bottom: 24px;
`;
