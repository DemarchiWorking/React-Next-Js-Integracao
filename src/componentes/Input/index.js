import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
   
    //border:1px solid ${({  }) => colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color:  ${({ theme }) => theme.colors.mainBg};
   
   
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
                {...props} // montar propriedades , '...' = agrupar parametros/ aplicar array ( adicionar se é uma string ou int... demarchialteracao importante)
                />
        </div>
    );
}

Input.defaultProps = {
    login: '',
    senha: '',
    //placeholder: 'Entre com seu Login',
};
Input.propTypes = {
    // placeholder: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    senha: PropTypes.string.isRequired,
};
export default Input;