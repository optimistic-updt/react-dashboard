import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,
  .App {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.7s ease-out;
  }

  .main-header,
  .main-footer {
    background: ${({ theme }) => theme.headFoot};
    color: ${({ theme }) => theme.text};
  }

  .widget,
  .nav--category-dropdown,
  .login--dropdown {
    background: ${({ theme }) => theme.mainDivs};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.Border};
    box-shadow: 0 2px 2px ${({ theme }) => theme.shadows};
  }

  input {
    background: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text};
  }

  .main-footer a,
  .nav--category-dropdown a,
  .login--dropdown a {
    color: ${({ theme }) => theme.textAccent};
  }

`