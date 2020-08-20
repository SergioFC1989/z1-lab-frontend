import React from 'react'
import StyleTitle from './style'

export default class Title extends React.Component {
	render() {
		return (
			<>
				<StyleTitle>{this.props.name}</StyleTitle>
			</>
		)
	}
}
