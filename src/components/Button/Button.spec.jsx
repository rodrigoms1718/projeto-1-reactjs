/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
const { render, screen } = require('@testing-library/react');
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  //verifica se exite o texto no botão
  it('should render the button woth the text "Load more"', () => {
    const fn = jest.fn;
    render(<Button text="load more" disabled={false} onClick={fn} />);
    //mais usado em testes assicronos
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    //espero
    expect(button).toBeInTheDocument();
  });

  //verifica o clique do botao.
  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  //verifica se o botão está desabilitado se for verdadeiro.
  it('should be disabled when disabled is true', () => {
    const fn = jest.fn;
    render(<Button text="load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  //tirar uma foto do momento.
  it('should match snapshot', () => {
    const fn = jest.fn;
    const { container } = render(<Button text="load more" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
