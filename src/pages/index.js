import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Skus from '../components/Products/Skus'

const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Advanced Example" />
    <h1>Heading Goes Here</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nostrum cum
      at, aliquid temporibus laborum beatae soluta eveniet fugit hic alias dolor
      qui nihil molestiae nulla animi numquam fugiat suscipit?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      delectus quasi modi, totam optio, laborum omnis eum veritatis aspernatur
      natus labore. Nostrum corporis nihil voluptatum doloremque facilis qui non
      ipsam.
    </p>
    <Skus />
  </Layout>
)

export default AdvancedExamplePage
