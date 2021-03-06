module.exports = { 
  content: ["./*.{html,php}", "./html/*.{html,js}"],
  darkMode: 'media',
  theme: {
      screens: { 
          xs    : '321px',
          sm    : '481px',
          md    : '576px',
          lg    : '768px',
          xl    : '992px', 
          xxl   : '1200px',
          xxxl   : '1400px' ,
      },
      extend: {
          fontFamily: {  
            'nun': ['Nunito', 'sans-serif'],
            'pub': ['Public Sans', 'sans-serif'], 
          },
          container: {  
              padding: '15px',
          },
          colors: { 
              'primary' : '#F2DBDB',
              'body-color' : '#C9B6B6',
              'secondary' : '#009520',
              'black' : {
                'light'   : '#1D1D1D',
                'default' : '#000000',
                'text'    : '#94a3b8',
              },
          },
          fontSize: {
            h1: ['40px', '50px'], 
                xlh1: ['36px', '46px'], 
                mdh1: ['34px', '44px'], 
                smh1: ['32px', '42px'], 
            h2: ['37px', '47px'],
                xlh2: ['34px', '44px'],
                mdh2: ['32px', '42px'],
                smh2: ['30px', '40px'],
            h3: ['35px', '45px'],
                xlh3: ['32px', '42px'],
                mdh3: ['30px', '40px'],
                smh3: ['25px', '35px'],
            h4: ['32px', '42px'],
                xlh4: ['30px', '40px'],
                mdh4: ['25px', '35px'],
                smh4: ['23px', '30px'],
            h5: ['30px', '40px'], 
                xlh5: ['25px', '35px'], 
                mdh5: ['23px', '30px'], 
                smh5: ['20px', '28px'], 
            h6: ['25px', '35px'], 
                xlh6: ['23px', '30px'], 
                mdh6: ['20px', '28px'], 
                smh6: ['18px', '26px'], 
            p: ['18px', '28px'],
          },
          borderRadius: {
            '35': '35px',
            '50': '50px',
          },
          boxShadow: {
            'header': '-1px -7px 10px 0px #f2dbdb',
            'footer': '-2px 7px 10px 0px #f2dbdb;',
          },
      },
  },

  plugins: [],
}
