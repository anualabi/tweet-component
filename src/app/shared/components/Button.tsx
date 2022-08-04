import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DEFAULT_COLOR, GRAY_TEXT } from '../utils/styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disableShadow, startIcon, endIcon, size, ...props }, ref) => {
    return (
      <StyledButton ref={ref} type="button" disableShadow={disableShadow} size={size} {...props}>
        {startIcon && <span className="material-icons start-icon">{startIcon}</span>}
        {children}
        {endIcon && <span className="material-icons end-icon">{endIcon}</span>}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  disableShadow: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Button.defaultProps = {
  disableShadow: false,
  startIcon: '',
  endIcon: '',
  size: 'md'
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: transparent;
  border-radius: 6px;
  border-width: 0px;
  color: ${DEFAULT_COLOR};
  cursor: pointer;
  text-align: center;
  margin: 1rem;
  min-width: ${(p) => {
    if (p.size === 'lg') {
      return '93px';
    } else if (p.size === 'sm') {
      return '73px';
    }
    return '81px';
  }};
  min-height: ${(p) => {
    if (p.size === 'lg') {
      return '42px';
    } else if (p.size === 'sm') {
      return '32px';
    }
    return '36px';
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(p) => {
    if (p.size === 'lg') {
      return '.5rem 1rem';
    } else if (p.size === 'sm') {
      return '.3rem .5rem';
    }
    return '.4rem .75rem';
  }};

  .start-icon {
    margin-right: 0.3rem;
  }

  .end-icon {
    margin-left: 0.3rem;
  }

  &:hover {
    background-color: transparent;
  }

  &:disabled {
    background-color: ${DEFAULT_COLOR};
    border: none;
    box-shadow: none;
    color: ${GRAY_TEXT};
    cursor: inherit;

    &:hover {
      background-color: ${DEFAULT_COLOR};
    }
  }

  box-shadow: ${(p) => p.disableShadow && 'none'};
`;
