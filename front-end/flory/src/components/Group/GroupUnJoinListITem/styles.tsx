import styled from "styled-components";

export const SMain = styled.div`
  box-shadow: 4px 4px 8px rgba(144, 144, 144, 0.25);
  border-radius: 13px;
  padding: 1.25rem;
  transition: all 1s;
  margin-bottom: 1rem;

  .title__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .group-name {
      font-weight: bolder;
      margin-bottom: 0.5rem;
    }
    .private__section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      #accept-tag {
        background-color: #906bd5;
        color: white;
        padding: 0.3rem 0.5rem;
        font-size: 0.5rem;
        border-radius: 30px;
      }
    }
  }

  .group-content {
    font-size: 0.7rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .group-content-detail {
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    word-wrap: break-word; /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
    white-space: pre-wrap; /* current browsers */
  }
  .flex__oneline {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: 0.5rem;
  }

  &:hover {
    /* transform: scale(1.03); */
  }
`;
