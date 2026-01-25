    export default defineAppConfig({
  alpine: {
    title: 'Amalina',
    description: 'Critical & Creative Thinking for Information Technology Solution',

    header: {
      position: 'right',
      logo: {
        text: 'Amalina'
      }  
    
    footer: {
      credits: {
        enabled: false // possible value are : true | false
        
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
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
