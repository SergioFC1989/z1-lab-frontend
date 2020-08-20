import React from 'react'
import StyleLayout from './style'
import Title from '../Title/index'

export default class Layout extends React.Component{
	render() {
		return (
			<>
			<StyleLayout>
				<Title name="Pokedex"/>
			</StyleLayout>
			</>
		)
	}
}