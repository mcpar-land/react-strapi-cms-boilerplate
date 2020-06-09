import React from 'react'
import ReactMarkdown from 'react-markdown'

export const ImageHeader: React.FC<{
	title: string
	background: {
		url: string
		name: string
		caption: string
	}
}> = ({ title, background: { url, name, caption } }) => {
	return (
		<div>
			Image Header: {title}, {url}
		</div>
	)
}

export const RichText: React.FC<{
	text: string
}> = ({ text }) => {
	return <ReactMarkdown source={text} />
}

export const Attachment: React.FC<{
	attachment: { url: string; name: string; caption: string }
}> = ({ attachment: { url, name, caption } }) => {
	return (
		<div>
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
}> = ({ gallery }) => {
	return (
		<div>
			gallery:{' '}
			{gallery.map((img, i) => (
				<p key={i}>{img.url}</p>
			))}
		</div>
	)
}

export const ComponentError: React.FC<{
	typename: string
}> = ({ typename }) => {
	return <div>Error: no Page Component for typename {typename}!</div>
}
