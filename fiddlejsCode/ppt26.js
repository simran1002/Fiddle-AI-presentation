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
        y: '28.5%',
        w: '28%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText('The history of 1999 BC in India marks the decline of the Indus Valley Civilization.', opts3);



    let opts5 = {
        x: '36%',
        y: '30%',
        w: '28%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText('The period saw the emergence of the Vedic civilization and the composition of the Rigveda, one of the oldest sacred texts. ', opts5);
    


    let opts7 = {
        x: '67%',
        y: '28.5%',
        w: '28%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText('Significant developments in agriculture, trade and culture characterized this era.', opts7);
   


    let opts4 = {
        x: '5%',
        y: '63.5%',
        w: '28%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText('In 1999 BC, the Harappan cities were in decline, and the Aryans were eastablishing their presence in the Indian subcontinent.', opts4);
   

    let opts6 = {
        x: '36%',
        y: '63.5%',
        w: '28%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText("The transition to the Iron Age began during this time, paving the way for technological advancements.", opts6);
    
    
     let opts1 = {
        x: '67%',
        y: '63.5%',
        w: '28%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText('The social structure and religious practices of ancient India underwent tranformations during this period.', opts1);

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


    pptx.writeFile();
}