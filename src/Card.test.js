import Card from './Card';
import {render} from '@testing-library/react';

it('should render component successfuly', () => {
   render(<Card />);
})

it('should match snapshot', () => {
   const {asFragment} = render(<Card />);
   expect(asFragment()).toMatchSnapshot();
})