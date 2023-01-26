import {render, fireEvent, screen} from '@testing-library/react';
import DateSelector from './DateSelector';

test('check if DateSelector works', () =>{
    render(<DateSelector/>);
    const heading = screen.getByTestId("date-selector-title");

    expect(heading).toBeInTheDocument();

})