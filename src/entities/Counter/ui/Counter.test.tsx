import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/test';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });

    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
