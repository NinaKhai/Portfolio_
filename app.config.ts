export default defineAppConfig({
  alpine: {
    title: 'Amalina',
    description: 'Critical & Creative Thinking for Information Technology Solution',

    header: {
      position: 'right',
      logo: {
        text: 'Amalina'
      }
    },

    footer: {
      credits: {
        enabled: false
      },
      navigation: true,
      alignment: 'center',
      message: 'Follow me on'
    },

    socials: {
      twitter: '#',
      instagram: '#',
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
