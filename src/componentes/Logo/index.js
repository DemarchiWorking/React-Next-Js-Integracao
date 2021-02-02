import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
//import Logomarca from '../../../photos/icon.png';
//import imagem from '../../../node_modules/react-image/';

function Logo() {
  return (
      <div>
        <img
          alt="Descricao"
          style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                    src="../../../photos/icon.png"
        />
      </div>

            );
}

//Logo.propTypes = {
//  className: PropTypes.jp.isRequired,
//};

const IncludeLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default IncludeLogo;

/* CRIAR UM COMPONENTE FOTO EM OUTRO ARQUIVO
import React from 'react'
import imgagemEscolhida from 'endereco-da-imagem'

export default () => <img src={imgagemEscolhida}/>
*/