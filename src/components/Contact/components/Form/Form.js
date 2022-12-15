import React from 'react'
import { Button, Upload, Icon } from 'antd'
import { Input } from 'antd'
import { Row, Col } from 'antd'
import * as Yup from 'yup'
import { withFormik } from 'formik'
import Logo from '../Logo'
import CompanyLogo from '../CompanyLogo/index'
import { ParallaxProvider } from 'react-scroll-parallax'
import { EaseIn } from 'common/components/Animation'

const { TextArea } = Input

function Form() {
  // const props = {
  //   name: 'file',
  //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  //   headers: {
  //     authorization: 'authorization-text',
  //   },
  //   onChange(info) {
  //     if (info.file.status !== 'uploading') {
  //       console.log(info.file, info.fileList)
  //     }
  //     if (info.file.status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully`)
  //     } else if (info.file.status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`)
  //     }
  //   },
  // }

  return (
    <div style={{ paddingTop: '20%' }}>
      <Row>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <EaseIn start="bottom" duration={2000}>
              <Col span={12}>
                <Input
                  size="large"
                  placeholder="First Name*"
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name*"
                />
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Last Name*"
                  size="large"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name*"
                  name="lastName"
                  autoComplete="lname"
                />
              </Col>
            </EaseIn>
          </Row>
          <Row gutter={[16, 16]}>
            <EaseIn start="bottom" duration={2000}>
              <Col span={12}>
                {' '}
                <Input
                  placeholder="Email Address*"
                  size="large"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address*"
                  name="email"
                  autoComplete="email"
                />
              </Col>
              <Col span={12}>
                {' '}
                <Input
                  placeholder="Phone Number"
                  size="large"
                  variant="outlined"
                  required
                  fullWidth
                  name="phonenumber"
                  label="Phone Number"
                  id="phonenumber"
                  autoComplete="phonenumber"
                />
              </Col>
            </EaseIn>
          </Row>
          <Row gutter={[16, 16]}>
            <EaseIn start="bottom" duration={2000}>
              <Col span={24}>
                <TextArea rows={4} />
              </Col>
            </EaseIn>
          </Row>
          <Row>
            <EaseIn start="bottom" duration={2000}>
              <Col span={24}>
                <Upload>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
              </Col>
            </EaseIn>
          </Row>
          <Row gutter={[16, 16]}>
            <EaseIn start="bottom" duration={2000}>
              <Col span={24}>
                <Button type="primary" shape="round" color="" block>
                  Submit
                </Button>
              </Col>
            </EaseIn>
          </Row>
          <Logo />
        </Col>

        <Col span={12}>
          <ParallaxProvider>
            <CompanyLogo />
          </ParallaxProvider>
        </Col>
      </Row>
    </div>
  )
}

const Formik = withFormik({
  enableReinitialize: true,
  mapPropsToValues({ firstName, lastName, email, phonenumber }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      phonenumber: phonenumber || '',
    }
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required'),
    phonenumber: Yup.string().required('phonenumber is required'),
  }),
  handleSubmit: (values, { props }) => {
    props.onSubmit({ variables: values })
  },
})(Form)

export default Formik
