import {render, fireEvent, screen, renderHook, act} from '@testing-library/react';
import DateSelector from './DateSelector';
import {useAvailableDate, useAvailableTime} from './constants';


describe('<DateSelector/>', () => {
    test('check if DateSelector works', () => {
        const {result} = renderHook(useAvailableDate)
        const {result:timeResult} = renderHook(useAvailableTime);
        render(<DateSelector date={result.current.availableDate} updateDate={result.current.updateDate}
            time={timeResult.current.availableTimes} updateTime={timeResult.current.updateTime} />);
        const heading = screen.getByTestId("date-selector-title");
        expect(heading).toBeInTheDocument();
    })

    test("date select is in the document", () => {
        const {result} = renderHook(useAvailableDate)
        const {result:timeResult} = renderHook(useAvailableTime);
        render(<DateSelector date={result.current.availableDate} updateDate={result.current.updateDate}
            time={timeResult.current.availableTimes} updateTime={timeResult.current.updateTime} />);
            result.current.availableDate.map((_, idx) => {
                const dateSelect = screen.getByTestId(`date-select-${idx}`)
                expect(dateSelect).toBeInTheDocument();
            })
    })

    test("click date select", () => {
        const {result} = renderHook(useAvailableDate)
        const {result:timeResult} = renderHook(useAvailableTime);
        render(<DateSelector date={result.current.availableDate} updateDate={result.current.updateDate}
            time={timeResult.current.availableTimes} updateTime={timeResult.current.updateTime} />);
            result.current.availableDate.map((item, idx) => {
                const dateSelect = screen.getByTestId(`date-select-${idx}`)
                fireEvent.click(dateSelect);
                expect(result.current.availableDate[idx].active).toBeTruthy();
            })
    })

    test("time select is in the document", () => {
        const {result} = renderHook(useAvailableDate)
        const {result:timeResult} = renderHook(useAvailableTime);
        render(<DateSelector date={result.current.availableDate} updateDate={result.current.updateDate}
            time={timeResult.current.availableTimes} updateTime={timeResult.current.updateTime} />);
        timeResult.current.availableTimes.map((_, idx) => {
            const timeSelect = screen.getByTestId(`time-select-${idx}`)
            expect(timeSelect).toBeInTheDocument();
        })
    })

    test("click time select", () => {
        const {result} = renderHook(useAvailableDate)
        const {result:timeResult} = renderHook(useAvailableTime);
        render(<DateSelector date={result.current.availableDate} updateDate={result.current.updateDate}
            time={timeResult.current.availableTimes} updateTime={timeResult.current.updateTime} />);
            timeResult.current.availableTimes.map((item, idx) => {
                const timeSelect = screen.getByTestId(`time-select-${idx}`)
                fireEvent.click(timeSelect);
                expect(timeResult.current.availableTimes[idx].active).toBeTruthy();
            })
    })
})
