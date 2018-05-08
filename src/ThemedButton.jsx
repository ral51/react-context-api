import React from 'react';
import { ContextProvider } from './contextProvider';

export default function ThemedButton() {
	
	return (

		<ContextProvider.Consumer>
		{
			({theme, toggle}) => ( <button style={{"backgroundColor": theme.background}} onClick={toggle}> Toggle theme </button> )

		}
		</ContextProvider.Consumer>
	);
	
}