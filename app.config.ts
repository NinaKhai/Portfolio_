export default defineAppConfig({
  alpine: {
    title: 'Amalina',
    description: 'Critical & Creative Thinking for Information Technology Solution',
    image: {
      src: '/social-card-preview.png',
      alt: 'Smart Device - Smart Shoes.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Amalina' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false // possible value are : true | false
        
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'ninakmrlzmn',
      instagram: 'ninakmrlzmn',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: '#'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
