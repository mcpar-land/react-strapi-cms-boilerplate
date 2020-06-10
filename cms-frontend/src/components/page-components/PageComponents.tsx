import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Carousel } from 'react-bootstrap'

import './PageComponents.scss'

export const ImageHeader: React.FC<{
	title: string
	background: {
		url: string
		name: string
		caption: string
	}
	key?: any
}> = ({ title, background: { url, name, caption }, key }) => {
	return (
		<div key={key}>
			Image Header: {title}, {url}
		</div>
	)
}

export const RichText: React.FC<{
	text: string
	key?: any
}> = ({ text, key }) => {
	return (
		<ReactMarkdown
			className="page-component-rich-text"
			source={text}
			key={key}
		/>
	)
}

export const RichTextColumns: React.FC<{
	columns: { text: string }[]
	key?: any
}> = ({ columns, key }) => {
	return (
		<div key={key} className="page-component-rich-text-columns">
			{columns.map((col, i) => (
				<RichText {...col} key={i} />
			))}
		</div>
	)
}

export const Attachment: React.FC<{
	attachment: { url: string; name: string; caption: string }
	key?: any
}> = ({ attachment: { url, name, caption }, key }) => {
	return (
		<div key={key}>
			attachment: {name}, {url}
		</div>
	)
}

export const ImageGallery: React.FC<{
	gallery: {
		url: string
		name: string
		caption: string
		previewUrl: string | null
	}[]
	key?: any
}> = ({ gallery, key }) => {
	return (
		<Carousel key={key}>
			{gallery.map((img, i) => (
				<Carousel.Item key={i}>
					<img className="d-block w-100" src={img.url} />
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export const Custom: React.FC<any> = (props) => {
	return <div>Custom</div>
}

export const ComponentError: React.FC<{
	typename: string
	key?: any
}> = ({ typename, key }) => {
	return <div key={key}>Error: no Page Component for typename {typename}!</div>
}
