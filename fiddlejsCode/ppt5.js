let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  
  let opts = {
    x: '5%',
    y: '0.5%',
    w: '100%',
    h: 1.5,
    fontSize: 24,
    color: '000000',
    bold:true,
  };
  slide.addText(
    'Indian History',
    opts
  );


  // Text below the first image
    let opts1 = {
        x: "5%",
        y: "20%",
        w: '45%',
        h: 1,
        fontSize: 14,
        bold:true,
        color: '0000ff',
    };
  
 slide.addText(
        "Pros",
        opts1
    );
  
   // Image options
  let imageOpts = {
    path: 'https://cdn-icons-png.freepik.com/256/14441/14441011.png?ga=GA1.1.121843369.1708074947&semt=ais',
    h:0.05 ,
    w: '1%',
    x:'7%' ,
    y: '35%'
  };

  // Add the first image to the slide
  slide.addImage(imageOpts);
  
  let opts3 = {
        x: "8%",
        y: "30%",
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
  
 slide.addText(
        "Indian Army's modernization efforts are on track with the induction of advanced weaponry and technology.",
        opts3
    );
    
    let imageOpts1 = {
    path: 'https://cdn-icons-png.freepik.com/256/14441/14441011.png?ga=GA1.1.121843369.1708074947&semt=ais',
    h:0.05 ,
    w: '1%',
    x:'7%' ,
    y: '47%'
  };

  // Add the first image to the slide
  slide.addImage(imageOpts1);
    
    let opts5 = {
        x: "8%",
        y: "40%",
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    
 slide.addText(
        "Increased focus on cybersecurity to combat emerging threats in the digital age.",
        opts5
    );


  // Text below the second image
      let opts2 = {
        x: "52%",
        y: "20%",
        w: '45%',
        h: 1,
        fontSize: 14,
        bold:true,
        color: 'FF0000',
    };
  
 slide.addText(
        "Cons",
        opts2
    );
  
  let imageOpts2 = {
          path: 'https://t3.ftcdn.net/jpg/01/43/11/20/360_F_143112044_gPXDDV55GTU8LQcX9GMbbP2Ss83ORMoy.webp',
          h:0.05 ,
          w: '1%',
          x:'54%' ,
          y: '37%'
        };
      
        // Add the first image to the slide
        slide.addImage(imageOpts2); 
  
    let opts4 = {
        x: "55%",
        y: "30%",
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
  
 slide.addText(
        "Challenges in border security due to ongoing territorial disputes with neighbouring countries.",
        opts4
    );
    
    let imageOpts4 = {
              path: 'https://t3.ftcdn.net/jpg/01/43/11/20/360_F_143112044_gPXDDV55GTU8LQcX9GMbbP2Ss83ORMoy.webp',
              h:0.05,
              w: '1%',
              x:'54%' ,
              y: '47%'
            };
          
            // Add the first image to the slide
            slide.addImage(imageOpts4); 
            
            
     let opts6 = {
        x: "55%",
        y: "40%",
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    
     slide.addText(
        "Budget contraints impacting the pace of infrastructure development and capacity building.",
        opts6
    );
    
    
      pptx.writeFile();
    }