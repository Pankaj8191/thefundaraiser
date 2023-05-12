'use client'

import React from 'react'
import styled from 'styled-components';
import FormLeftWrapper from './Components/FormLeftWrapper'
import FormRightWrapper from './Components/FormRightWrapper'

const form = () => {
  return (
    <FormWrapper>
        <FormMain>
            <FormInputsWrapper>
                <FormLeftWrapper>

                </FormLeftWrapper>
                <FormRightWrapper>

                </FormRightWrapper>
            </FormInputsWrapper>
        </FormMain>
    </FormWrapper>
  )
}


const FormMain = styled.div`
    width:80%;
`

const FormWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
`
const FormInputsWrapper = styled.div`
    display:flex;
    justify-content:space-between ;
    margin-top:45px ;
`

export default form