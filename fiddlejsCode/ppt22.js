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
        x: '27%',
        y: '18%',
        w: '48%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('In 1990BC, the Indus Valley Civilization flourished. Cities like Mohenjo-Daro and Harappa thrived, showcasing advanced urban planning and sophisticated drainage systems.', opts3);



    let opts5 = {
        x: '27%',
        y: '33%',
        w: '50%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText("The Indus Valley Civilization was one of the world's oldest urban civilizations, with a remarkable level of urbanization and technological advancements for its time. ", opts5);
    


    let opts4 = {
        x: '27%',
        y: '48%',
        w: '50%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('The economy of the Indus Valley Civilization was based on agriculture, trade, and craftsmanship. They traded with regions like Mesopotamia for goods such as precious stones and metals.', opts4);
   

    let opts6 = {
        x: '27%',
        y: '63%',
        w: '50%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText("The period of 1990BC marked a significant cultural era in Indian history, with advancements in art, pottery and script. The civilization had a unique script that is yet to be fully deciphered.", opts6);




    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '25.5%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '39%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

 let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '53.5%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts2);
    
     let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '68%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts3);


     // Text below the first image
  let opts = {
    x: '12%' ,
    y: '18%',
    w: '40%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "1990BC",
    opts
  );


 // Text below the first image
  let opts11 = {
    x: '12%' ,
    y: '33%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Indus Valley Civilization",
    opts11
  );

 // Text below the first image
  let opts2 = {
    x: '12%' ,
    y: '48%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Economic Activities",
    opts2
  );


 // Text below the first image
  let opts31 = {
    x: '12%' ,
    y: '63%',
    w: '15%',
    h: 1,
    fontSize: 14,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Cultural Significance",
    opts31
  );



    pptx.writeFile();
}