let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');


// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

// Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '4%',
        y: '22%',
        w: '29%',
        h: '29%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1.5  // Set border width as needed
        }
    });

// Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '35%',
        y: '22%',
        w: '29%',
        h: '29%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1.5  // Set border width as needed
        }
    });
    
    // Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '66%',
        y: '22%',
        w: '29%',
        h: '29%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1.5  // Set border width as needed
        }
    });
  // Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '4%',
        y: '55.5%',
        w: '29%',
        h: '29%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1.5  // Set border width as needed
        }
    });
    
     // Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '35%',
        y: '55.5%',
        w: '29%',
        h: '29%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1.5  // Set border width as needed
        }
    });

     // Add rectangles with blue and red borders
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: '66%',
        y: '55.5%',
        w: '29%',
        h: '29%',
        fill: 'ffffff',  // White fill color
        line: {
            color: '0000ff',  // Blue border color
            width: 1.5  // Set border width as needed
        }
    });


    // Title
    let titleOpts = {
        x: '5%',
        y: '0.7%',
        w: '100%',
        h: 1.5,
        fontSize: 24,
        color: '000000',
        bold: true,
    };
    slide.addText('Indian History', titleOpts);


    // Pros Texts
    let opts3 = {
        x: '5%',
        y: '34%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('Around 1100BC, the Vedic period was prominent in Indian history, characterized by', opts3);



    let opts5 = {
        x: '36%',
        y: '34%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('During this time, the Indian subcontinent was divided into various kingdoms and tribal', opts5);
    


    let opts7 = {
        x: '67%',
        y: '34%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('Agriculture and trade were the primary economic activities, with the indus Valley Civilization', opts7);
   


    let opts4 = {
        x: '5%',
        y: '67.5%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('Society was stratified, with distinct social classes like Brahmins (priests), Kshatriyas', opts4);
   

    let opts6 = {
        x: '36%',
        y: '67.5%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText("Advancements in metallurgy, pottery, and urban planning were notable achievements during", opts6);
    
    
     let opts1 = {
        x: '67%',
        y: '67.5%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('Literature, art, and philosophical ideas flourished, laying the foundation for future Indian', opts1);

    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '37%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

 let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '68%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts2);
    
     let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '58.5%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts3);
    
     let imageOpts4 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '36%',
        y: '58.5%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts4);
    
     let imageOpts5 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '68%',
        y: '58.5%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts5);

 // Text below the first image
  let opts = {
    x: '5%' ,
    y: '25%',
    w: '58.5%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Indian Civilization",
    opts
  );

 // Text below the first image
  let opts53 = {
    x: '36%' ,
    y: '25%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Political Landscape",
    opts53
  );

 // Text below the first image
  let opts42 = {
    x: '67%' ,
    y: '25%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Economic Activities",
    opts42
  );

 // Text below the first image
  let opts32 = {
    x: '5%' ,
    y: '58.5%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Social Structure",
    opts32
  );

 // Text below the first image
  let opts21 = {
    x: '36%' ,
    y: '58.5%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Technological Advancements",
    opts21
  );

 // Text below the first image
  let opts12 = {
    x: '67%' ,
    y: '58.5%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Cultural Development",
    opts12
  );


    pptx.writeFile();
}