export default {
  theme: {
    extend: {
      fontFamily: {
        Founders: ['FoundersGrotesk', 'sans-serif'],
        PPMontreal: ['PPNeueMontreal', 'sans-serif'],
        Noto: ['NotoSans', 'sans-serif'],
      },
      spacing: {
        title: "1.75rem",      // for your 28px case
        button: "2rem",        // for 32px
        horizontal: "4rem",   //for 64px
        links: "1.25rem",      //for 20px 
        section: "10rem",       // for 160px
        next: "7rem",                   // 96px
        padding: "clamp(0.75rem, 2vw, 1.5rem)"

      },
      fontSize: {
        clamp: "clamp(3rem,8vw,14rem)",
        sub: "clamp(0.75rem, 1.5vw, 1rem)", 
        title: "4rem",      // for your 64px case
        section: " 3rem",        // for 44px
        header: "2rem" ,   //for 32px
        small: "16px",       // for 16px
        normal: "4.5rem"  ,         // 24px 
        normalSmall: "1.25rem",    //20px
        foots: "72px",
        big:"clamp(1.25rem,3vw,2rem)",
        follow:"clamp(1rem,2vw,1.5rem)"

      },
      color: {
        coconut: "#F7F5F2",
        graphite:"#1E1919",
      },
    },
  },


};

// "clamp(0.75rem, 2vw, 1.125rem)",