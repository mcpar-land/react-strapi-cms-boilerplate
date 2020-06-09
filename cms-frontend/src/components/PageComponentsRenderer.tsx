import React from 'react'

import * as ComponentComponents from './page-components/PageComponents'

/**
 * This component pulls from the actual __typename in the GraphQL query to pick
 * which React component to use to render each
 */
const PageComponentsRenderer: React.FC<{
	prefix?: string
	components: any[]
}> = ({ prefix = 'ComponentAllPageComponents', components }) => {
	const renderedComponents = components.map((c, i) => {
		const typename = c.__typename
		const componentName = typename.replace(prefix, '')
		const TheComponent = ComponentComponents[componentName]
		if (!TheComponent)
			return <ComponentComponents.ComponentError typename={componentName} />
		return <TheComponent {...c} />
	})

	return <>{renderedComponents}</>
}

export default PageComponentsRenderer
