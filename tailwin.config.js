tailwind.config = {
    theme: {
      extend: {
            colors: {
                gren900:"#304f47",
                orenge100:"#ff7f47",
                black900:"#212529",
                black700:"#262339",
                black400:"#737679",
                white100:"#fff",
                boxshadow:"0 5px 10px rgba(0, 0, 0, 0.2)",
            },

            

            fontFamily: {
                quicksand:["'Quicksand', sans-serif;"],
                sans:["'Work Sans', sans-serif;"],
            },
            
            maxWidth: {
                container: "1320px",
            },

            width: {
                '200': '200px',
                '617': '617px',
                '980': '1000px',
            },

            spacing: {
                '30': '30px',
                '50': '50px',
                '70': '70px',
                '100': '100px',
                '150': '150px',
                '16.5': '16.5px',
                '32.5': '32.5px',
                
            },

            backgroundImage: {
                logo1: "url('images/tourx1.png')",
                logo2: "url('images/tourx2.png')",
                banner1: "url('images/banner1.png')",
                banner2: "url('images/banner2.png')",
                banner3: "url('images/banner3.png')",
            },

            transitionProperty: {
                '3s': 'all linear 0.3s',
            },

            fontSize: {
                a80: '80px',
                a16: '16px',
                a13: '13px',
                a30: '30px',
                
            },

            lineHeight: {
                'extra-loose': '2.5',
                'a90': '90px',
                'a37': '37px',
            },
            
        }
    }
}