let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');


// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

// Helper function to add a vertical line shape
function addVerticalLine(slide, x, y, height) {
    let lineOpts = {
        x: x,
        y: y,
        w: 0, // Adjust the width of the vertical line as needed
        h: height,
        line: '0000FF', // Blue color
    };
    slide.addShape('line', lineOpts);
}


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
        x: '6%',
        y: '25%',
        w: '42%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('The Vedic period flourished in India around 1100BC, known for its religious texts and hymns like the Rigveda.', opts3);
    addVerticalLine(slide, '6%', '22%', 1);


    let opts5 = {
        x: '6%',
        y: '44%',
        w: '42%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('Significant developments in agriculture and trade marked this era, shaping early Indian civilization.', opts5);
     addVerticalLine(slide, '6%', '43%', 0.95);


    let opts7 = {
        x: '6%',
        y: '66%',
        w: '42%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('The caste system began to take shape during this period, influencing social structure for centuries to come.', opts7);
     addVerticalLine(slide, '6%', '63%', 1);


    let opts4 = {
        x: '55%',
        y: '25%',
        w: '42%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('In 1100BC, the Mahajanapadas emerged as powerful kingdoms, paving the way for political evolution in India.', opts4);
     addVerticalLine(slide, '55%', '22%', 1);

    let opts6 = {
        x: '55%',
        y: '45%',
        w: '42%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText("The period saw advancements in metalworking, pottery, and urban planning, reflecting early Indian ingenuity.", opts6);
     addVerticalLine(slide, '55%', '43%', 0.95);
    
     let opts1 = {
        x: '55%',
        y: '66%',
        w: '42%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('The end of the Vedic period around 500Bc set the stage for the rise of Buddhism and Jainismm in India.', opts1);
     addVerticalLine(slide, '55%', '63%', 1);



    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '22%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '43%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

 let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '63%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts2);
    
     let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '55.5%',
        y: '22%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts3);
    
     let imageOpts4 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '55.5%',
        y: '43%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts4);
    
     let imageOpts5 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '55.5%',
        y: '63%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts5);


    pptx.writeFile();
}
