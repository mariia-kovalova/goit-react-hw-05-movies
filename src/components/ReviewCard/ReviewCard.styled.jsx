import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  color: var(--color-text-dark);
  font-weight: 400;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
