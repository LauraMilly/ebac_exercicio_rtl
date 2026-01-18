import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {

    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir inserir dois comentários', () => {
        render(<PostComment />);

        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('comment-button');

        fireEvent.change(input, {
            target: { value: 'Primeiro comentário' },
        });
        fireEvent.click(button);

        fireEvent.change(input, {
            target: { value: 'Segundo comentário' },
        });
        fireEvent.click(button);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });

});
