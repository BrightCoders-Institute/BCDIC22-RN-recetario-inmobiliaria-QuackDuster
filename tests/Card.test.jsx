// Modules
import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { act, create } from 'react-test-renderer';
import { render } from '@testing-library/react-native';
// Component
import Card from '../src/components/Card.jsx';
// Database
import dbinfo from '../src/data/dbinfo.json';

let component;

describe('Card component', () => {
	beforeEach(() => {
		component = render(<Card item />);
	});

	it('Should render the component in the application', () => {
		expect(component).toBeDefined();
	});

	it('The component displays 1 unique child', () => {
		const component3 = create(<Card item={dbinfo.data[0]} />).toJSON();
		if (component3 && !(component3 instanceof Array)) {
			expect(component3.children?.length).toBe(1);
		}
	});

	test('Favorite button can be pressed', () => {
		const component4 = create(<Card item={dbinfo.data[0]} />);
		const favButton = component4.root.findByProps({ testID: 'favsBtn' });

		expect(component4.root.props.item.favorite).toBe(false);
		global.setImmediate = jest.useRealTimers;
		act(() => favButton.props.onPress());
		expect(component4.root.props.item.favorite).toBe(true);
	});
});
