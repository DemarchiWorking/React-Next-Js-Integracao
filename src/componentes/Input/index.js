import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border:1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color:  ${({ theme }) => theme.colors.mainBg};
    /*border-radius:  ${({ theme }) => theme.border.primary}; */
    outline: 0;
    margin-bottom: 25px;
    `;

export function Input({ onChange, placeholder, ...props }){
    return (
        <div>
            <InputBase 
                placeholder={placeholder}
                onChange={onChange} 
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props} // montar propriedades , '...' = agrupar parametros/ aplicar array
                />
              
        </div>

    );
}

Input.defaultProps = {
    login: '',
    placeholder: 'Entre com seu Login',
};

Input.propTypes = {
    onChange: PropTypes.string.isRequired,
   // placeholder: PropTypes.string,isRequired,
    login: PropTypes.string.isRequired,
    senha: PropTypes.string.isRequired,
};

export default Input;