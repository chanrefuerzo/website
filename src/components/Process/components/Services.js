import React from 'react'
import { Container } from 'common/assets/style'
import { Section, Phases, ScreenTitle } from '../assets/style'
import PropTypes from 'prop-types'
import PhaseRow from './PhaseRow'

function Services({ refs }) {
  const phases = [
    {
      title:
        'Processing of Locational Clearance for Building and Business Permits',
      description:
        'This is required from all owners/developers prior to conducting any activity or construction on their property/land. Processing of the application and its supporting documents is with the Zoning Administration and Enforcement Division.',
      icon: 'info-circle',
    },
    {
      title: 'Preparation architectural designs of city government structures',
      description:
        'The Interim Office of the City Architect prepares the design of structures and other infrastructure projects for the city government ensuring the optimization in the utilization of government properties and maintaining the uniformity and identity of Davao City in its design that is aesthetically pleasing to the eyes. ',
      icon: 'snippets',
    },
    {
      title: 'Processing of applications for homelots',
      description:
        'The Shelter Program of the City Government is available to qualified applicants based on the requirements of the Urban Land Reform Program or Republic Act 7279.  The City Government thru the OCPDC-Housing and Homesite Division screens applications daily from walk-in clients.',
      icon: 'code',
    },
    {
      title:
        'Providing assistance on informal settler association organization needs and its mobilization',
      description:
        ' Community Associations are extended with organizing capability services to effectively assist individuals who collectively apply for financial assistance from various financing institutions in the procurement of land in affordable payment arrangements.',
      icon: 'bug',
    },
    {
      title: 'Providing demographic and statistical data on Davao City',
      description:
        ' The Research and Statistics Division provides demographical data on Davao City, its socio-economic statistics, and more related information that will assist its clients in their individual requirements for personal, business or various purposes.',
      icon: 'bug',
    },
    {
      title: 'Generating maps and provide geographic and tabular data',
      description:
        'The generation of several maps of Davao City is handled by the Geographic Information Systems Unit of OCPDC.  Geo-tagged landmarks, government and private properties are incorporated into the database to cater to the map data requirements of the city government, line agencies, and its clients.  Land use maps and development plans translated into maps are generated to efficiently illustrate development trends based on the current development plan of the City',
      icon: 'bug',
    },
  ]
  return (
    <Section ref={refs['services']} id="services">
      <Container>
        <ScreenTitle>DEVELOPMENT CYCLE</ScreenTitle>
        <Phases>
          {phases.map((phase, key) => {
            return <PhaseRow key={key} data={phase} />
          })}
        </Phases>
      </Container>
    </Section>
  )
}

Services.propTypes = {
  refs: PropTypes.any,
}

export default Services
