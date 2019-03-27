import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Anna from '../images/image-anna'
import Tierney from '../images/image-tierney'
import Kat from '../images/image-kat'
import James from '../images/image-james'
import Guillermo from '../images/image-guillermo'
import IconLeft from '../images/image-speakers-l'
import IconRight from '../images/image-speakers-r'
import './speakers.scss'

const SectionSpeakers = () => ( 

  <div class="section-speakers">

    <div class="section-speakers-custom">
      <span class="section-speakers-custom__icon-left"><IconLeft /></span>
      <h2 class="section-speakers__title  title">Speakers</h2>
      <span class="section-speakers-custom__icon-right"><IconRight /></span>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Anna />
      <Tierney />
      <Kat />
      <James />
      <Guillermo />
    </div>


  </div>

)


export default SectionSpeakers