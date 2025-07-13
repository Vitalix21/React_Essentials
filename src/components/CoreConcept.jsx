import CoreConceptItem from './CoreConcepts.jsx'
import { CORE_CONCEPTS } from '../core-data.js'

export default function CoreConcept() {
	return (
		<section id='core-concepts'>
			<h2>Core concepts</h2>
			<ul>
				{CORE_CONCEPTS.map(conceptItem => (
					<CoreConceptItem key={conceptItem.title} {...conceptItem} />
				))}
			</ul>
		</section>
	)
}
