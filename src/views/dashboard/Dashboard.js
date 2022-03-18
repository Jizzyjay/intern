import React from 'react'

import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

const Dashboard = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="typography" className="card-title mb-0">
                Typography Test
              </h4>
              <p> Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="typography" className="card-title mb-0">
                Typography Test
              </h4>
              <p> Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
