// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps/Description'
import SocialLinks from './steps/Technology'
import PersonalInfo from './steps/CoursesInfo'
import AccountDetails from './steps/CoursesDetails'

// ** Icons Imports
import { FileText, User, MapPin, Link } from 'react-feather'

const WizardModernVertical = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Account Details',
      subtitle: 'Enter Your Account Details.',
      icon: <FileText size={18} />,
      content: <AccountDetails stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      icon: <User size={18} />,
      content: <PersonalInfo stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      icon: <Link size={18} />,
      content: <SocialLinks stepper={stepper} type='modern-vertical' />
    }
  ]

  return (
    <div className='modern-vertical-wizard'>
      <Wizard
        type='modern-vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModernVertical
