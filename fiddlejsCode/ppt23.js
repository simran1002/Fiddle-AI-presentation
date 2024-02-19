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
        y: '49%',
        w: '18%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText('Indus Valley Civilizaton thrives with planned cities like Mohenjo-Daro and Harappa, advanced drainage systems, and trade networks.', opts3);



    let opts5 = {
        x: '25%',
        y: '47%',
        w: '18%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText("Use of bronze tools, advanced urban planning, and sophisticated pottery techniques characterize the period.", opts5);
    


    let opts4 = {
        x: '45%',
        y: '47%',
        w: '18%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText('Social hierarchy with priests and rulers at the top skilled artisans and traders, and farmers forming the majority of the population.', opts4);
   

    let opts6 = {
        x: '65%',
        y: '45%',
        w: '18%',
        h: 1,
        fontSize: 13,
        color: '000000',
    };
    slide.addText("Polytheistic beliefs with reverence for nature, worship of deities like Indra, Varuna, and Agni, and ritual sacrifices.", opts6);




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
        x: '26%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

 let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '46%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts2);
    
     let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '66%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts3);


     // Text below the first image
  let opts = {
    x: '5%' ,
    y: '25%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Civilization",
    opts
  );


 // Text below the first image
  let opts11 = {
    x: '25%' ,
    y: '25%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Technology",
    opts11
  );

 // Text below the first image
  let opts2 = {
    x: '45%' ,
    y: '25%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Society",
    opts2
  );


 // Text below the first image
  let opts31 = {
    x: '65%' ,
    y: '25%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Religion",
    opts31
  );



    pptx.writeFile();
}