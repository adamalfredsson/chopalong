import styled from 'styled-components';

export const StyledFooter = styled.section`
  footer {
    width: 100%;
    address {
      font-style: normal;
      a {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        i {
          width: 16px;
          margin: 0;
          margin-right: 12px;
          padding: 0;
          border: none;
          display: inline-flex;
          justify-content: center;
          color: var(--color-secondary);
        }
      }
    }
  }
`;
