export default {
  colors: {
    white: '#F7F3E7',
    background: '#486A12',
    primary: '#2a462b',
    secondary: '#9DB779',
    muted: '#203C27',
    text:"white"
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96
  ],
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 6
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }
  }, variants: {
	card:{ 
    alignSelf:"flex-start",
		backgroundColor:"#fff",
    margin:"10px",
		mx:["auto","10px"],
		transition:"all 0.3s ease",
		boxShadow: "card", 
		width: ["300px","400px",], 
		borderRadius:"5px",
		overflow:"hidden",
		":hover": { 
			transform:"scale(1.01)"
		}
	},
	normal: {
		color:"text",
		textDecoration:"none"
	},
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    link: {
      color: 'white',
      ":hover": {
        color:"grey"
      }
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'secondary',
      }
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
	    lineHeight: '1.2'
    },
  },
  breakpoints: ['655px'],
}
