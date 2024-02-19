let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');


// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();



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
        y: '31%',
        w: '40%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('Thriving urban civilization with advanced city planning, trade networks, and sophisticated drainage systems.', opts3);



    let opts5 = {
        x: '5%',
        y: '58%',
        w: '40%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('Development of early Hinduism with rituals, hymns, and sacred texts like the Rigveda.', opts5);
    


    let opts4 = {
        x: '50%',
        y: '31%',
        w: '40%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText('Nomadic people settling in the Indian subcontinent, bringing Vedic culture and Sanskrit language.', opts4);
   

    let opts6 = {
        x: '50%',
        y: '59%',
        w: '40%',
        h: 1,
        fontSize: 14,
        color: '000000',
    };
    slide.addText("Progress in metuallurgy, pottery and agriculture techniques, showcasing early Indian scientific achievements.", opts6);




    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '22%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '51%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

 let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '51%',
        y: '22%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts2);
    
     let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '51%',
        y: '51%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts3);


     // Text below the first image
  let opts = {
    x: '5%' ,
    y: '20.5%',
    w: '40%',
    h: 1,
    fontSize: 13,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Indus Valley Civilization",
    opts
  );


 // Text below the first image
  let opts11 = {
    x: '5%' ,
    y: '49.5%',
    w: '40%',
    h: 1,
    fontSize: 13,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Religious Practices",
    opts11
  );

 // Text below the first image
  let opts2 = {
    x: '50%' ,
    y: '20.5%',
    w: '40%',
    h: 1,
    fontSize: 13,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Aryans Migration",
    opts2
  );


 // Text below the first image
  let opts31 = {
    x: '50%' ,
    y: '49.5%',
    w: '40%',
    h: 1,
    fontSize: 13,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Technological Advancements",
    opts31
  );



    pptx.writeFile();
}