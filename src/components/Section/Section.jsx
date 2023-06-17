import PropTypes from 'prop-types';
import { PhonebookTitle } from './Section.styled';

export const Section = ({ children, title, firstTitle }) => {
  return (
    <section>
      {title ? <PhonebookTitle>{title}</PhonebookTitle> : ''}
      {firstTitle ? <h2>{firstTitle}</h2> : ''}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  firstTitle: PropTypes.string,
  children: PropTypes.node,
};
