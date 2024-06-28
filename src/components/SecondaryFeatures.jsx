'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import maventamaLanding from '@/images/maventama-landing.png'
import maventamaPointOfSale from '@/images/maventama-point-of-sale.png'
import maventamaApiWhatsapp from '@/images/maventama-api-whatsapp.png'
import maventamaInventory from '@/images/maventama-inventory.png'
import maventamaPhotoBooth from '@/images/maventama-photobooth.png'
import maventamaAssesment from '@/images/maventama-assesment.png'
import maventamaHRIS from '@/images/maventama-hris.png'
import maventamaProperty from '@/images/maventama-property.png'
import maventamaLMS from '@/images/maventama-lms.png'
import maventamaTicketing from '@/images/maventama-ticketing.png'

const features = [
  {
    name: 'MT Landing Page',
    summary: 'A beautiful landing page to showcase your portofolios, product, and services.',
    description:
      'There are a lot of great landing page builders out there, but we think ours is right for you. We’re biased, but we’re pretty sure you’ll agree.',
    image: screenshotProfitLoss,
    url: 'https://landing.maventama.com',
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
        <div>
            <Image 
            src={maventamaLanding} width='100' height='100' />
        </div>
        </>
      )
    },
  },
  {
    name: 'MT Point of Sale',
    summary:
      'A next level point of sale system that can be used in any kind of business.',
    description:
      'Feature: Point of Sale, LPKK, Operational, Absence, Inventory, and Reporting. Our team experienced in franchise and retail business.',
    image: screenshotInventory,
    url: '',
    icon: function InventoryIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaPointOfSale} width='100' height='100' />
            </div>
        </>
      )
    },
  },
//   {
//     name: 'MT WA API',
//     summary:
//       'Integrate your business to make your business more efficient.',
//     description:
//       'Feature: WhatsApp API, WhatsApp Business, WhatsApp Chatbot, and WhatsApp Integration. Make your business more efficient and effective.',
//     image: screenshotContacts,
//     url: 'https://wa.maventama.com',
//     icon: function ContactsIcon() {
//       return (
//         <>
//             <div>
//                 <Image 
//                 src={maventamaApiWhatsapp} width='100' height='100' />
//             </div>
//         </>
//       )
//     },
//   },
  {
    name: 'MT Inventory',
    summary:
      'Manage your inventory with ease. Get real-time data and reports.',
    description:
      'Feature: Inventory, Stock, Stock Opname, Purchase, PO, LPB, Reporting, etc. Safety stock, reorder point, and many more.',
    image: screenshotContacts,
    url: '',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaInventory} width='100' height='100' />
            </div>
        </>
      )
    },
  },
  {
    name: 'PhotoPal',
    summary:
      'A online Photobox anywhere without queuing. Very stylish. Very cool.',
    description:
      'A lot of templates, easy to use, and very stylish. Very cool. Fast in moment. You can use it anywhere without queuing.',
    image: screenshotContacts,
    url: 'https://photopal.id',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaPhotoBooth} width='100' height='100' />
            </div>
        </>
      )
    },
  },
  {
    name: 'MT Assesment',
    summary:
      'Assesment for unit in your business. Get real-time data and reports.',
    description:
      'Audit and Assesment scoring for your business. Get real-time data and reports. Make your business more efficient and effective.',
    image: screenshotContacts,
    url: '',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaAssesment} width='100' height='100' />
            </div>
        </>
      )
    },
  },
  {
    name: 'MT HRIS',
    summary:
      'Human Resource Information System for your business.',
    description:
      'Feature: HRIS, Payroll, Absence, Operational, and Reporting. Productivity and efficiency for your business.',
    image: screenshotContacts,
    url: '',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaHRIS} width='100' height='100' />
            </div>
        </>
      )
    },
  },
  {
    name: 'MT Property Developer',
    summary:
      'Monitoring and managing your property with ease.',
    description:
      'Feature: Property, Tenant, Rent, Operational, and Reporting. Make your property more efficient and effective.',
    image: screenshotContacts,
    url: '',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaProperty} width='100' height='100' />
            </div>
        </>
      )
    },
  },
  {
    name: 'MT Learning Management System',
    summary:
      'Use for university, school, or any kind of learning system.',
    description:
      'Feature: LMS, E-Learning, Course, Student, Teacher, and Reporting. Make your learning system more efficient and effective.',
    image: screenshotContacts,
    url: '',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaLMS} width='100' height='100' />
            </div>
        </>
      )
    },
  },
  {
    name: 'MT E-Ticketing',
    summary:
      'Use for event absence',
    description:
      'Feature: Blast WhatsApp Image Ticket, QR Code, and Reporting. Make your event more efficient and effective.',
    image: screenshotContacts,
    url: '',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaTicketing} width='100' height='100' />
            </div>
        </>
      )
    },
  },
]

let customFeature = {
    name: 'Customize Request?',
    summary:
      'We can help you to build your custom request. Just tell us what you need. We will make it happen.',
    description:
      'Let make it happen. We can help you to build your custom request. Price is negotiable.',
    image: screenshotContacts,
    url: '',
    icon: function ContactsIcon() {
      return (
        <>
            <div>
                <Image 
                src={maventamaProperty} width='100' height='100' />
            </div>
        </>
      )
    },
  };

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
    <feature.icon />
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-grey-300' : 'text-grey-600',
        )}
      >
        
      </h3>
      <p className="mt-2 font-display text-xl text-grey-500">
      <a target='_blank' href={feature.url ? feature.url : '#'}>
        {feature.name}
        </a>
        {/* {feature.summary} */}
      </p>
      <p className="mt-4 text-sm text-grey-300">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
          </div>
        </div>
      ))}
      
    <div
      className='mx-auto max-w-2xl bg-blue-600 p-5'
    //   {...props}
    >
    {/* <feature.icon /> */}
      <h3
        className={clsx(
          'mt-6 text-3xl font-medium',
          'text-grey-300',
        )}
      >
        {customFeature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-white">
        {customFeature.summary}
      </p>
              <a href='mailto:maventama@gmail.com' style={
                {
                    marginTop: '40px',
                    display: 'inline-block',
                }
              } class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-2">
                Email
              </a>
              <a href='https://wa.me/6285158513669' style={
                {
                    marginTop: '40px',
                    display: 'inline-block',
                }
              } class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                WhatsApp
              </a>
    </div>
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8 gap-y-10">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                      <a target='_blank' href={feature.url ? feature.url : '#'}>
                        {feature.name} {feature.url ? '↗️' : ''}
                      </a>
                  ),
                }}
                isActive="1"
                className="relative"
              />
            ))}
            <div
                  key={customFeature.summary}
                  feature={{
                      ...customFeature,
                      name: (
                      <Tab className="ui-not-focus-visible:outline-none">
                          <span className="absolute inset-0" />
                          {customFeature.name}
                      </Tab>
                      ),
                  }}
                  isActive="1"
                  className="relative bg-blue-600 rounded p-5"
              >
              {/* <customFeature.icon /> */}
              <h3
                  className={clsx(
                  'mt-2 text-3xl font-medium',
                  'text-white',
                  )}
              >
                  {customFeature.name}
              </h3>
              <p className="mt-2 font-display text-xl text-white">
                  {customFeature.summary}
              </p>
              <a href='mailto:maventama@gmail.com' style={
                {
                    marginTop: '40px',
                    display: 'inline-block',
                }
              } class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-2">
                Email
              </a>
              <a href='https://wa.me/6285158513669' style={
                {
                    marginTop: '40px',
                    display: 'inline-block',
                }
              } class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                WhatsApp
              </a>
              </div>
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl  px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  {/* <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div> */}
                </Tab.Panel>
              ))}
            </div>
            {/* <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" /> */}
          </Tab.Panels>
        </>
      )}
      
      
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="products"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
