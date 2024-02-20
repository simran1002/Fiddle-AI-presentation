let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
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
        fontFace: 'League Spartans'
    };
    slide.addText('Indian History', titleOpts);

    // Pros Texts
    let opts3 = {
        x: '28.5%',
        y: '18%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("In 1999, India saw significant advancements in technology, with the launch of the Indian Space Research Organisation's first indigenously developed satellite, IRS-1C. The Kargil War between India and Pakistan also took place during this year.", opts3);

    let opts5 = {
        x: '28.5%',
        y: '38%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("1999 marked the release of the iconic Bollywood movie 'Hum Dil De Chuke Sanam' and the establishment of the National Museaum of Indian Cinema in Mumbai.", opts5);

    let opts4 = {
        x: '28.5%',
        y: '58%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("The Indian economy in 1999 experienced growth in sectors like IT and telecommunications, laying the foundation for future development. The introduction of the Fiscal Responsibility and Budget Management Act aimed to strength fiscal discipline.", opts4);


    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '29%',
    };
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '49%',
    };
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '69%',
    };
    // Add the third image to the slide
    slide.addImage(imageOpts2);



 // Text below the first image
  let opts11 = {
    x: '12%' ,
    y: '22%',
    w: '40%',
    h: 1,
    fontSize: 13,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "History of 1999",
    opts11
  );

 // Text below the first image
  let opts2 = {
    x: '12%' ,
    y: '42%',
    w: '40%',
    h: 1,
    fontSize: 13,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Cultural Events",
    opts2
  );


 // Text below the first image
  let opts31 = {
    x: '12%' ,
    y: '62%',
    w: '15%',
    h: 1,
    fontSize: 13,
    bold: true,
    color: '0000ff',
  };
  slide.addText(
    "Economic Milestones",
    opts31
  );

    pptx.writeFile();
};